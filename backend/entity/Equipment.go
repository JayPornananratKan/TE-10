package entity

import (
	"time"

	"gorm.io/gorm"
)

type Equipment struct{
	gorm.Model
	E_name string
	Date time.Time
	Pic string `gorm:"type:longtext"`

	AdminID *uint
	Admin Admin `gorm:"foreignKey:AdminID"`
	TypeEquipID *uint
	TypeEquip TypeEquip `gorm:"foreignKey:TypeEquipID"`
	TimeForEquipID *uint
	TimeForEquip TimeForEquip `gorm:"foreignKey:TimeForEquipID"`
}

type TypeEquip struct{
	gorm.Model
	TypeEquip_name string

	Equipments []Equipment `gorm:"foreignKey:TypeEquipID"`
}

type TimeForEquip struct{
	gorm.Model
	Time time.Time

	Equipments []Equipment `gorm:"foreignKey:TimeForEquipID"`
}