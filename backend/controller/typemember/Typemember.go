package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/JayPornananratKan/TE-10/entity"
)

//HTTP POST request ไปที่ endpoint ของหนังใหม่

func CreatePayment(c *gin.Context) {
	var payment entity.Payment
	var member entity.Member
	var bank entity.Bank
	var statuspay entity.Statuspay
	var typemember entity.Typemember

	if err := c.ShouldBindJSON(&payment); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	//9: ค้นหา member ด้วย id //tx.RowsAffected ตรวจสอบแถว
	if tx := entity.DB().Raw("SELECT * FROM members where id = ?", payment.Member.ID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}
	//9: ค้นหา status ด้วย id
	if tx := entity.DB().Where("id = ?", payment.StatuspayID).First(&statuspay); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "method not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", payment.BankID).First(&bank); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "method not found"})
		return
	}
	if tx := entity.DB().Where("id = ?", payment.Typemember).First(&typemember); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "method not found"})
		return
	}

	py := entity.Payment{
		Slip:       payment.Slip,
		TotalPrice: payment.TotalPrice,
		Datie:      payment.Datie,
		Bank:       bank,
		Statuspay:  statuspay,
		Typemember: typemember,
		Member:     member, 
	}
	if err := entity.DB().Create(&py).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": py})

}

// GET  movie/:id

func GetPayment(c *gin.Context) {

	var payment entity.Payment

	id := c.Param("id")

	if err := entity.DB().Preload("Typemember").Raw("SELECT * FROM payments WHERE id = ?", id).Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Preload("Bank").Raw("SELECT * FROM payments WHERE id = ?", id).Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Preload("Statuspay").Raw("SELECT * FROM payments WHERE id = ?", id).Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Preload("Member").Raw("SELECT * FROM payments WHERE id = ?", id).Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": payment})
}

// GET  movies

func ListPayment(c *gin.Context) {
	var payment []entity.Payment

	if err := entity.DB().Preload("Typemember").Preload("Bank").Preload("Statuspay").Preload("Member").Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": payment})
}

// DELETE  movies/:id

func DeletePayment(c *gin.Context) {

	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM payments WHERE id = ?", id); tx.RowsAffected == 0 {

		c.JSON(http.StatusBadRequest, gin.H{"error": "movie not found"})

		return

	}
	c.JSON(http.StatusOK, gin.H{"data": id})

}

// PATCH  movies


func UpdatePayment(c *gin.Context) {
	var payment entity.Payment
	var newpayment entity.Payment
	var member entity.Member
	var bank entity.Bank
	var statuspay entity.Statuspay
	var typemember entity.Typemember

	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", payment.ID).First(&newpayment); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "watchvideo not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", payment.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", payment.Bank).First(&bank); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}
	if tx := entity.DB().Where("id = ?", payment.Typemember).First(&typemember); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "bill not found"})
		return
	}


	
	newpayment.Member = member
	newpayment.Statuspay = statuspay
	newpayment.Bank = bank
	newpayment.Typemember = typemember

	if err := entity.DB().Save(&newpayment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
  
	c.JSON(http.StatusOK, gin.H{"data": newpayment})
}
