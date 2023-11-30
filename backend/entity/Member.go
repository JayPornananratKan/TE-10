package entity

import "gorm.io/gorm"

type Member struct {
	gorm.Model
	Username string
	Email string
	Password string
	
	TypememberID *uint
	Typemember Typemember

	Memberinformation []Memberinformation `gorm:"foreignKey:MemberID"`
	Repairrequest []Repairrequest `gorm:"foreignKey:MemberID"`
	Payment []Payment `gorm:"foreignKey:MemberID"`


}