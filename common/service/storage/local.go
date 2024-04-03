package storage

import (
	"fmt"
	"github.com/we7coreteam/w7-rangine-go-support/src/facade"
	"os"
)

type Local struct {
}

func (self Local) Delete(name string) error {
	err := os.Remove(self.GetRealPath(name))
	return err
}

func (self Local) GetSaveRootPath() string {
	return fmt.Sprintf("%s/storage/", facade.GetConfig().Get("storage.local.path"))
}

func (self Local) GetSavePath(name string) string {
	return fmt.Sprintf("/storage/%s", name)
}

func (self Local) GetRealPath(name string) string {
	return fmt.Sprintf("%s/storage/%s", facade.GetConfig().Get("storage.local.path"), name)
}
