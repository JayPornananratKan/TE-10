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
	var equipment entity.Equipment
	var machine entity.Machine

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
	if tx := entity.DB().Where("id = ?", repairrequest.EquipmentID).First(&equipment); tx.RowsAffected == 0 {
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
		ImageEquipment: repairrequest.ImageEquipment,
		Member: member,
		Equipment: equipment,
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

    if err := entity.DB().Preload("Typemember").Preload("Bank").Preload("Statuspay").Preload("Member").Where("id = ?", id).First(&repairrequest).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, gin.H{"data": repairrequest})
}


func ListRepairrequest(c *gin.Context) {
	var payment []entity.Payment

	if err := entity.DB().Preload("Typemember").Preload("Bank").Preload("Statuspay").Preload("Member").Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": payment})
}

// DELETE  movies/:id

func DeleteRepairrequest(c *gin.Context) {

	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM payments WHERE id = ?", id); tx.RowsAffected == 0 {

		c.JSON(http.StatusBadRequest, gin.H{"error": "movie not found"})

		return

	}
	c.JSON(http.StatusOK, gin.H{"data": id})

}

// PATCH  movies


