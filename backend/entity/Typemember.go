package entity

import "gorm.io/gorm"

type Typemember struct {
	gorm.Model
	Name string
	Type string
	Period int
	Price int

	Member []Member `gorm:"foreignKey:TypememberID"`
	Payment []Payment `gorm:"foreignKey:TypememberID"`
}