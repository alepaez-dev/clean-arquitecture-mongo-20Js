const mongoose = require("mongoose")

const generationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
    type:[
      {
        name: {
          type: String
        },
        module: {
          type: String,
          enum: ["Enmaquetado", "Javascript", "Algoritmos", "React", "Backend", "Estructura de datos"]
        },
        type: {
          type: String,
          enum: ["ProgramLead", "B-Mentor", "Mentor"]
        }
      }
    ]}
})

module.exports = mongoose.model("generations", generationSchema)