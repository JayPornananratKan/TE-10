package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/JayPornananratKan/TE-10/entity"
)

//HTTP POST request ไปที่ endpoint ของหนังใหม่



// GET  movie/:id

func GetTypemember(c *gin.Context) {

	var typemember entity.Typemember

	id := c.Param("id")

	if err := entity.DB().Raw("SELECT * FROM payments WHERE id = ?", id).First(&typemember).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": typemember})
}

// GET  movies

func ListTypemember(c *gin.Context) {
	var typemember []entity.Typemember

	if err := entity.DB().Find(&typemember).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": typemember})
}


