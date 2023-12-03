package entity

import (
	"time"

	"gorm.io/gorm"
)

type Repairrequest struct {
	gorm.Model
	Issue string
	Imagemachine string
	Daterequest time.Time
	
	MemberID *uint
	Member Member

	MachineID *uint
	Machine Machine
	
	StatusrepairID *uint
	Statusrepair Statusrepair
}

type Statusrepair struct{
	gorm.Model
	Statusrequest string
}