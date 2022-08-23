const express = require("express")

const app = express()

// Middleware del json
// Middlewares
app.use(express.json())

// Endpoint de Home
app.get("/", (request, response) => {
  response.json({ message: "Bienvenido a nuestra API de arquitectura limpia" })
}) 

// Exportar

// solo exporta 1 cosa
// objeto -> 1 cosa
// arreglo -> 1 cosa
// aplicacion de express
//
module.exports = app