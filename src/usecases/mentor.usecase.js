const Mentor = require("../models/mentor.model")

// Funciones
// Handlers

// 1- Uso de caso -> Crear un mentor
const createMentor = (mentorData) => {
  // Crear un mentor
  const mentor = Mentor.create(mentorData)
  return mentor
}


module.exports = { createMentor }