package controller


import (

"net/http"


"github.com/gin-gonic/gin"

"github.com/Peerapong-Chitwuttichot/TE-10/entity"

)

// POST /Training

func CreateUser(c *gin.Context) {

	var training entity.Training
	
	if err := c.ShouldBindJSON(&training); err != nil {
	
	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	
	return
	
	}
	
	if err := entity.DB().Create(&training).Error; err != nil {
	
	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	
	return
	
	}
	
	c.JSON(http.StatusOK, gin.H{"data": training})
	
	} 
