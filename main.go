package main

import (
	"fmt"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"strconv"
)

func getPort() int {
	if port := os.Getenv("PORT"); port == "" {
		return 5555
	} else {
		// port should usually be valid
		portNum, _ := strconv.Atoi(port)
		return portNum
	}
}

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve the frontend from build under /
	router.Use(static.Serve("/", static.LocalFile("./client/build/", true)))

	// Serve the api under the route group /api/*
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "Pong!",
			})
		})
	}

	// Start the app
	port := getPort()
	addr := fmt.Sprintf(":%d", port)
	router.Run(addr)
}
