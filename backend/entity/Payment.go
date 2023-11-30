package entity

import (
	"time"

	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model

	Slip string
	TotalPrice int
	Datie  time.Time

	BankID *uint
	Bank Bank
	
	StatuspayID *uint
	Statuspay Statuspay
	
	STypememberID *uint
	Typemember Typemember
	
	MemberID *uint
	Member Member

}

type Statuspay struct{
	gorm.Model
	Statuspay string

	Payment []Payment `gorm:"foreignKey:StatuspayID"`
}