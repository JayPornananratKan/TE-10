package entity

import "gorm.io/gorm"

type Memberinformation struct {
	gorm.Model
	Firstname string
	Lastname string
	Birthday string
	Age string
	Weight float32
	Height float32
	Proflie string 
	Status bool
	GenderID *uint
	Gender Gender
	MemberID *uint
	Member Member

}