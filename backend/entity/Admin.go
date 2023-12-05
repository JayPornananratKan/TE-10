
package entity

import (

"gorm.io/gorm"

)

type Admin struct {
	gorm.Model
	FirstName string
	LastName string
	Email string
	Phone string
	
	Equipments []Equipment `gorm:"foreignKey:AdminID"`
}