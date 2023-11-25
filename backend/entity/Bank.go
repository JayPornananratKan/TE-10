package entity

import "gorm.io/gorm"

type Bank struct {
	gorm.Model
	Name string

	Payment []Payment `gorm:"foreignKey:BankID"`
	 
}