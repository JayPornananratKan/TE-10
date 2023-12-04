package main

import (
	"github.com/JayPornananratKan/TE-10/controller"
	
	"github.com/JayPornananratKan/TE-10/entity"
	"github.com/gin-gonic/gin"
)


func main() {

entity.SetupDatabase()

r := gin.Default()

r.Use(CORSMiddleware())

// User Routes
r.POST("/payments", controller.CreatePayment)
r.GET("/payments", controller.ListPayment)
r.GET("/payments/:id", controller.GetPayment)

r.DELETE("/payments/:id", controller.DeletePayment)
r.PATCH("/payments",controller.UpdatePayment)

r.GET("/typemembers", controller.ListTypemember)
r.GET("/typemembers/:id", controller.GetTypemember)

r.POST("/repairrequests" , controller.CreateRepairrequest)
r.GET("/repairrequests", controller.ListRepairrequest)
r.GET("/repairrequests/:id", controller.GetRepairrequest)
r.DELETE("/repairrequests/:id", controller.DeleteRepairrequest)
r.PATCH("/repairrequests", controller.UpdateRepairrequest)

// Run the server

r.Run()

}


func CORSMiddleware() gin.HandlerFunc {

return func(c *gin.Context) {

c.Writer.Header().Set("Access-Control-Allow-Origin", "*")

c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")

c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")


if c.Request.Method == "OPTIONS" {

c.AbortWithStatus(204)

return

}


c.Next()

}

}