package main

import (
	"github.com/gin-gonic/gin"

	"github.com/Popopond/T10-SE/controller"

	"github.com/Popopond/T10-SE/entity"
)

func main() {

	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	// Equip Routes
	r.GET("/equip", controller.GetAllEquip)
	r.GET("/equip/:id", controller.GetEquip)
	r.POST("/equip", controller.CreateEquipment)
	r.PUT("/equip/:id", controller.UpdateEquip)
	r.DELETE("/equip/:id", controller.DeleteEquip)
	// TypeEquip Routes
	r.GET("/typeEquips", controller.GetAllType)
	// Time Routes
	r.GET("/timeEquips", controller.GetAllTime)
	// Run the server

	r.Run()

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT,DELETE")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
