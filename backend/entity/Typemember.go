package entity

import "gorm.io/gorm"

type Typemember struct {
	gorm.Model
	Typename string
	Period int
	Price int

	Member []Member `gorm:"foreignKey:TypememberID"`
	Payment []Payment `gorm:"foreignKey:TypememberID"`
}