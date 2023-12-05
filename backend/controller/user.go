package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/JayPornananratKan/T10-SE/entity"
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
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM equipment WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "equipment not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /equip
func UpdateEquip(c *gin.Context) {
	var result entity.Equipment
	var equip entity.Equipment

	if err := c.ShouldBindJSON(&equip); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", equip.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "equipment not found"})
		return
	}

	if err := entity.DB().Save(&equip).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": equip})

}
