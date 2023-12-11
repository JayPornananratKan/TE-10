package controller

import (
	"net/http"

	"github.com/Popopond/T10-SE/entity"
	"github.com/gin-gonic/gin"
)

// GET /genders
func GetAllTime(c *gin.Context) {
	var times []entity.TimeForEquip
	if err := entity.DB().Raw("SELECT * FROM time_for_equips").Scan(&times).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": times})
}
