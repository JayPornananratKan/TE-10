package entity

import (
	

	"gorm.io/gorm"
)

type Repairrequest struct {
	gorm.Model
	Issue string
	Imagemachine string
	ImageEquipment string
	MemberID *uint
	Member Member
	EquipmentID *uint
	Equipment Equipment
	MachineID *uint
	Machine Machine
	
}