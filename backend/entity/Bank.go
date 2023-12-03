package entity

import "gorm.io/gorm"

type Bank struct {
	gorm.Model
	Bankname string

	Payment []Payment `gorm:"foreignKey:BankID"`
	 
}