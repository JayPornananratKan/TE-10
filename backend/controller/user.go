package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm/clause"

	"github.com/Popopond/T10-SE/entity"
)

// POST /equip
func CreateEquipment(c *gin.Context) {
	var equip entity.Equipment
	var admin entity.Admin
	var typeEquip entity.TypeEquip
	var timeE entity.TimeForEquip

	if err := c.ShouldBindJSON(&equip); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})

		return

	}
	if tx := entity.DB().Where("id = ?", equip.AdminID).First(&admin); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "admin not found"})
		return
	}
	if tx := entity.DB().Where("id = ?", equip.TypeEquipID).First(&typeEquip); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "type not found"})
		return
	}
	if tx := entity.DB().Where("id = ?", equip.TimeForEquipID).First(&timeE); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "time not found"})
		return
	}
	u := entity.Equipment{
		E_name: equip.E_name,
		Pic:    equip.Pic,

		Admin:        admin,
		TypeEquip:    typeEquip,
		TimeForEquip: timeE,
	}
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": equip})

}

// GET /equip/:id

func GetEquip(c *gin.Context) {
	var equip entity.Equipment
	id := c.Param("id")
	if err := entity.DB().Preload("Admin").Preload("TypeEquip").Preload("TimeForEquip").Raw("SELECT * FROM equipment WHERE id = ?", id).Scan(&equip).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": equip})
}

// GET /equip

func GetAllEquip(c *gin.Context) {
	var equip []entity.Equipment
	if err := entity.DB().Preload("Admin").Preload("TypeEquip").Preload("TimeForEquip").Raw("SELECT * FROM equipment").Scan(&equip).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": equip})
}

// DELETE /equip/:id

func DeleteEquip(c *gin.Context) {

	// create variable for store data
	var equip entity.Equipment

	// get id from url
	id := c.Param("id")

	// delete data in database and check error
	if rows := entity.DB().Clauses(clause.Returning{}).Delete(&equip, id).RowsAffected; rows == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "record not found"})
		return
	}
	// response deleted data
	c.JSON(http.StatusOK, gin.H{"data": "cancel"})
}

// PATCH /equip
// PATCH /equip/:id
func UpdateEquip(c *gin.Context) {
	var equip entity.Equipment
	equipID := c.Param("id") // รับ ID จาก URL

	if err := entity.DB().First(&equip, equipID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Equipment not found"})
		return
	}

	// อัปเดตข้อมูลจาก JSON payload ที่ส่งมา
	if err := c.ShouldBindJSON(&equip); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ทำการบันทึกข้อมูลที่อัปเดตลงในฐานข้อมูล
	if err := entity.DB().Save(&equip).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update equipment"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": equip})
}
