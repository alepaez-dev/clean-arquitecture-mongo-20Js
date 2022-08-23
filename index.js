// Conectar con bd
// Levantar servidor
// Logica de ruteo
// Common Js
require("dotenv").config()
const mongoose = require("mongoose")
const app = require("./src/server")


console.log("process env", process.env)
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} = process.env

const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}${DB_NAME}`

// Promesa -> Conectar con Mongo por medio mongoose
mongoose.connect(URL)
.then(() => {
  console.log("Connect to our database...")
  
  // Levantando servidor
  app.listen(8080, () => {
    console.log("Servidor levantado")
  })
})
.catch((error) => {
  console.log("Error:", error)
})

