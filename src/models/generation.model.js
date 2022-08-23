/**
 * koder.model
 * Schema de mongoose
 * Modelo
 */

 const mongoose = require("mongoose")

 const generationSchema = new mongoose.Schema({
   name: {
     type: String,
     minlength: 3,
     maxlength: 20,
     required: true
   },
   status: {
     type: Boolean,
     enum: ["Active", "InProgress", "Finalized"]
   },
   type: {
     type: String,
     enum: ["Javascript", "Python"]
   },
   startDate: {
     type: Date
   },
   endDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  mentors: {
    type: 
      [
        {
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
          type: {
            type: String,
            enum: ["Mentor", "B-Mentor", "ProgramLead"]
          },
          edad: {
            type: Number,
            min: 18,
            max: 150
          }
        }
      ]
    }
 })
 
 // Exportando modelo
 module.exports = mongoose.model("generations", generationSchema)
 