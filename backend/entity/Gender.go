package entity

import "gorm.io/gorm"

type Gender struct {
	gorm.Model
	Sex string

	Memberinformation []Memberinformation `gorm:"foreignKey:GenderID"`	
}