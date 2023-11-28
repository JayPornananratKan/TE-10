package entity

import (
	
	"gorm.io/gorm"
	"time"
)

type Training struct {
	gorm.Model
	Descript string
	Select_datetime time.Time
	Amount int

	MemberID    uint
	Member      Member `gorm:"foreignKey:UserID"`

	TrainerID	uint
	Trainer	Trainer `gorm:"foreignKey:TrainerID"`

	RoomID	uint
	Room	Room `gorm:"foreignKey:RoomID"`

}

type Member struct {
	gorm.Model
	M_firstname string
	M_lastname string
	M_email string `gorm:"uniqueIndex"`
	M_username string `gorm:"uniqueIndex"`
	M_password string

	StatustrainID uint
	Status_train Status_train `gorm:"foreignKey:StatustrainID"`


}

type Trainer struct {
	gorm.Model
	T_firstname string
	T_lastname string
	T_email string `gorm:"uniqueIndex"`
	T_username string `gorm:"uniqueIndex"`
	T_password string
	
}

type Room struct {
	gorm.Model
	Room_number string
}

type Status_train struct {
	gorm.Model
	Status_train bool
}