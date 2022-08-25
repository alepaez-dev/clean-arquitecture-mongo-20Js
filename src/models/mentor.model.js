/**
 * koder.model
 * Schema de mongoose
 * Modelo
 */

 const mongoose = require("mongoose")

 const mentorSchema = new mongoose.Schema({
   name: {
     type: String,
     minlength: 3,
     maxlength: 20,
     required: true
   },
   module: {
     type: String,
     enum: ["Javascript", "React", "Backend", "Enmaquetado", "Algoritmia", "Estructura de datos"]
   },
   generation: {
    type: String,
    required: true
   },
   type: {
     type: String,
     enum: ["Mentor", "B-Mentor", "ProgramLead"]
   },
   edad: {
     type: Number,
     min: 18,
     max: 150
   },
 })
 
 // Exportando modelo
 module.exports = mongoose.model("mentors", mentorSchema)
 