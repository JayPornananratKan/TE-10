package controller

import (
	"net/http"

	"github.com/Popopond/T10-SE/entity"
	"github.com/gin-gonic/gin"
)

// GET /genders
func GetAllType(c *gin.Context) {
	var typeE []entity.TypeEquip
	if err := entity.DB().Raw("SELECT * FROM type_equips").Scan(&typeE).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": typeE})
}
