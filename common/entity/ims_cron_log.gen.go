// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package entity

import (
	"github.com/donknap/dpanel/common/accessor"
)

const TableNameCronLog = "ims_cron_log"

// CronLog mapped from table <ims_cron_log>
type CronLog struct {
	ID     int32                        `gorm:"column:id;type:INTEGER" json:"id"`
	CronID int32                        `gorm:"column:cron_id" json:"cronId"`
	Value  *accessor.CronLogValueOption `gorm:"column:value;serializer:json" json:"value"`
}

// TableName CronLog's table name
func (*CronLog) TableName() string {
	return TableNameCronLog
}