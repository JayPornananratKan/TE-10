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
	
	TypememberID *uint
	Typemember Typemember
	
	MemberID *uint
	Member Member



	

}