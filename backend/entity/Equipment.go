package entity

import "gorm.io/gorm"

type Equipment struct {
	gorm.Model
	Repairrequest []Repairrequest `gorm:"foreignKey:MemberID"`
}