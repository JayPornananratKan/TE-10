package entity

import "gorm.io/gorm"

type Machine struct {
	gorm.Model
	Repairrequest []Repairrequest `gorm:"foreignKey:MemberID"`
}