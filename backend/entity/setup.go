package entity

import (
	

	"gorm.io/driver/sqlite"

	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db

}

func SetupDatabase() {

	database, err := gorm.Open(sqlite.Open("TE-10.db"), &gorm.Config{})

	if err != nil {

		panic("failed to connect database")

	}

	// Migrate the schema

	database.AutoMigrate(
		&Admin{}, //entityใส่เรียงลำดับที่เป็นแม่
		&TypeEquip{},
		&TimeForEquip{},
		&Equipment{},
	)

	// Type1 := TypeEquip{
	// 	TypeEquip_name:  "Strength Training",
	// }
	// db.Model(&TypeEquip{}).Create(&Type1)
	// Type2 := TypeEquip{
	// 	TypeEquip_name:  "Physical Therapy",
	// }
	// db.Model(&TypeEquip{}).Create(&Type2)
	// Time1 := TimeForEquip{
	// 	Time:   time.Date(2012, 8, 24, 0, 0, 0, 0, time.Now().Location()),
	// }
	// Time1 := TimeForEquip{
	// 	Time:   time.Date(2012, 8, 24, 0, 0, 0, 0, time.Now().Location()),
	// }
	// db.Model(&TimeForEquip{}).Create(&Time1)
	db = database

}
