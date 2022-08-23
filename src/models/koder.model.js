/**
 * koder.model
 * Schema de mongoose
 * Modelo
 */

const mongoose = require("mongoose")

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },
  modulo: {
    type: String
  },
  edad: {
    type: Number,
    min: 18,
    max: 150
  },
  generacion: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    enum: ["f", "m", "o"]
  }
})

// Exportando modelo
module.exports = mongoose.model("koders", koderSchema)
