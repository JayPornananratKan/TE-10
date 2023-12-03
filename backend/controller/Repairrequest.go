package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/JayPornananratKan/TE-10/entity"
)

//HTTP POST request ไปที่ endpoint ของหนังใหม่

func CreateRepairrequest(c *gin.Context) {
	var repairrequest entity.Repairrequest
	var member entity.Member
	var machine entity.Machine
	var statusrequest entity.Statusrepair

	if err := c.ShouldBindJSON(&repairrequest); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	//9: ค้นหา member ด้วย id //tx.RowsAffected ตรวจสอบแถว
	if tx := entity.DB().Raw("SELECT * FROM members where id = ?", repairrequest.Member.ID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}
	//9: ค้นหา status ด้วย id
	if tx := entity.DB().Where("id = ?", repairrequest.Statusrepair).First(&statusrequest); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "method not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", repairrequest.MachineID).First(&machine); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "method not found"})
		return
	}
	

	rp := entity.Repairrequest{
		Issue: repairrequest.Issue,
		Imagemachine: repairrequest.Imagemachine,
		Daterequest: repairrequest.Daterequest,
		Statusrepair: statusrequest,
		Member: member,
		Machine: machine,
	}
	if err := entity.DB().Create(&rp).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": rp})

}

// GET  movie/:id

func GetRepairrequest(c *gin.Context) {
    var repairrequest entity.Repairrequest
    id := c.Param("id")

    if err := entity.DB().Preload("Machine").Preload("Statusrepair").Preload("Member").Where("id = ?", id).First(&repairrequest).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"data": repairrequest})
}


func ListRepairrequest(c *gin.Context) {
	var repairrequest []entity.Repairrequest

	if err := entity.DB().Preload("Machine").Preload("Statusrepair").Preload("Member").Find(&repairrequest).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": repairrequest})
}

// DELETE  movies/:id

func DeleteRepairrequest(c *gin.Context) {

	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM payments WHERE id = ?", id); tx.RowsAffected == 0 {

		c.JSON(http.StatusBadRequest, gin.H{"error": "Repairrequest not found"})

		return

	}
	c.JSON(http.StatusOK, gin.H{"data": id})

}

// PATCH  movies


func UpdateRepairrequest(c *gin.Context) {
	var repairrequest entity.Repairrequest
	var newrepairrequest entity.Repairrequest
	var member entity.Member
	var statusrepair entity.Statusrepair
	var machine entity.Machine

	if err := c.ShouldBindJSON(&repairrequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	
	}

	if tx := entity.DB().Where("id = ?", repairrequest.ID).First(&newrepairrequest); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "watchvideo not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", repairrequest.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", repairrequest.StatusrepairID).First(&statusrepair); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}
	if tx := entity.DB().Where("id = ?", repairrequest.MachineID).First(&machine); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}


	
	newrepairrequest.Member = member
	newrepairrequest.Statusrepair = statusrepair
	newrepairrequest.Machine = machine

	if err := entity.DB().Save(&newrepairrequest).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
  
	c.JSON(http.StatusOK, gin.H{"data": newrepairrequest})
}
