package controller

import (
	"errors"
	"github.com/docker/docker/api/types"
	"github.com/donknap/dpanel/app/common/logic"
	"github.com/donknap/dpanel/common/accessor"
	"github.com/donknap/dpanel/common/entity"
	"github.com/donknap/dpanel/common/service/docker"
	"github.com/donknap/dpanel/common/service/storage"
	"github.com/gin-gonic/gin"
	"github.com/we7coreteam/w7-rangine-go/v2/src/http/controller"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"time"
)

type Env struct {
	controller.Abstract
}

func (self Env) GetList(http *gin.Context) {
	result := make([]*accessor.DockerClientResult, 0)

	setting, err := logic.Setting{}.GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingDocker)
	if err == nil {
		for _, item := range setting.Value.Docker {
			result = append(result, item)
		}
	}
	currentName := "local"
	for _, item := range result {
		if item.Address == docker.Sdk.Client.DaemonHost() {
			currentName = item.Name
			break
		}
	}
	sort.Slice(result, func(i, j int) bool {
		return result[i].Name < result[j].Name
	})
	self.JsonResponseWithoutError(http, gin.H{
		"currentName": currentName,
		"list":        result,
	})
	return
}

func (self Env) Create(http *gin.Context) {
	type ParamsValidate struct {
		Name      string `json:"name" binding:"required"`
		Title     string `json:"title" binding:"required"`
		Address   string `json:"address" binding:"required"`
		TlsCa     string `json:"tlsCa"`
		TlsCert   string `json:"tlsCert"`
		TlsKey    string `json:"tlsKey"`
		EnableTLS bool   `json:"enableTLS"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	if params.EnableTLS && (params.TlsCa == "" || params.TlsCert == "" || params.TlsKey == "") {
		self.JsonResponseWithError(http, errors.New("开启 TLS 时需要上传证书"), 500)
		return
	}
	options := docker.NewDockerClientOption{
		Address: params.Address,
		Host:    params.Name,
	}
	if params.EnableTLS {
		if strings.HasSuffix(params.TlsCa, ".pem") {
			options.TlsCa = params.TlsCa
			options.TlsCert = params.TlsCert
			options.TlsKey = params.TlsKey
		} else {
			certList := []struct {
				name    string
				content string
			}{
				{
					name:    "ca.pem",
					content: params.TlsCa,
				},
				{
					name:    "cert.pem",
					content: params.TlsCert,
				},
				{
					name:    "key.pem",
					content: params.TlsKey,
				},
			}
			certRootPath := filepath.Join("docker", params.Name)
			for _, s := range certList {
				path := filepath.Join(storage.Local{}.GetStorageCertPath(), certRootPath, s.name)
				err := os.MkdirAll(filepath.Dir(path), os.ModePerm)
				if err != nil {
					self.JsonResponseWithError(http, err, 500)
					return
				}
				err = os.WriteFile(path, []byte(s.content), 0o600)
				if err != nil {
					self.JsonResponseWithError(http, err, 500)
					return
				}
			}
			options.TlsCa = filepath.Join(certRootPath, "ca.pem")
			options.TlsCert = filepath.Join(certRootPath, "cert.pem")
			options.TlsKey = filepath.Join(certRootPath, "key.pem")
		}
	}
	dockerClient, err := docker.NewDockerClient(options)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	defer func() {
		dockerClient.CtxCancelFunc()
		_ = dockerClient.Client.Close()
	}()
	_, err = dockerClient.Client.Info(docker.Sdk.Ctx)
	if err != nil {
		self.JsonResponseWithError(http, errors.New("Docker 客户端连接失败，错误信息："+err.Error()), 500)
		return
	}
	defaultEnv := false
	if params.Name == "local" {
		defaultEnv = true
	}
	logic.DockerEnv{}.UpdateEnv(&accessor.DockerClientResult{
		Name:      params.Name,
		Title:     params.Title,
		Address:   params.Address,
		TlsCa:     options.TlsCa,
		TlsCert:   options.TlsCert,
		TlsKey:    options.TlsKey,
		EnableTLS: params.EnableTLS,
		Default:   defaultEnv,
	})
	self.JsonSuccessResponse(http)
	return
}

func (self Env) Switch(http *gin.Context) {
	type ParamsValidate struct {
		Name string `json:"name" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	setting, err := logic.Setting{}.GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingDocker)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	options := docker.NewDockerClientOption{}
	address := ""
	if row, ok := setting.Value.Docker[params.Name]; !ok {
		self.JsonResponseWithError(http, errors.New("Docker 客户端不存在，请先添加"), 500)
		return
	} else {
		address = row.Address
		if row.EnableTLS {
			options.TlsCa = row.TlsCa
			options.TlsCert = row.TlsCert
			options.TlsKey = row.TlsKey
		}
	}
	options.Address = address
	options.Host = params.Name

	if docker.Sdk.Client.DaemonHost() == address {
		self.JsonSuccessResponse(http)
		return
	}
	oldDockerClient := docker.Sdk
	dockerClient, err := docker.NewDockerClient(options)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	_, err = dockerClient.Client.Info(dockerClient.Ctx)
	if err != nil {
		self.JsonResponseWithError(http, errors.New("Docker 客户端连接失败，请检查地址"), 500)
		return
	}
	oldDockerClient.CtxCancelFunc()
	_ = oldDockerClient.Client.Close()

	docker.Sdk = dockerClient
	go logic.EventLogic{}.MonitorLoop()

	// 清除掉统计数据
	logic.Setting{}.Save(&entity.Setting{
		GroupName: logic.SettingGroupSetting,
		Name:      logic.SettingGroupSettingDiskUsage,
		Value: &accessor.SettingValueOption{
			DiskUsage: &accessor.DiskUsage{
				Usage:     &types.DiskUsage{},
				UpdatedAt: time.Now(),
			},
		},
	})
	self.JsonSuccessResponse(http)
	return
}

func (self Env) Delete(http *gin.Context) {
	type ParamsValidate struct {
		Name []string `json:"name" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	setting, err := logic.Setting{}.GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingDocker)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	for _, name := range params.Name {
		if row, ok := setting.Value.Docker[name]; !ok {
			self.JsonResponseWithError(http, errors.New("Docker 客户端不存在，请先添加"), 500)
			return
		} else {
			if docker.Sdk.Client.DaemonHost() == row.Address {
				docker.Sdk.CtxCancelFunc()
				_ = docker.Sdk.Client.Close()
			}
			delete(setting.Value.Docker, name)
		}
	}
	_ = logic.Setting{}.Save(setting)
	self.JsonSuccessResponse(http)
	return
}
