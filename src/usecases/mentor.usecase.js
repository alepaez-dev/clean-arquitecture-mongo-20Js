const Mentor = require("../models/mentor.model")

// Funciones
// Handlers

// 1- Uso de caso -> Crear un koder
const createMentor = (mentorData) => {
  // Crear un koder
  const mentor = Mentor.create(mentorData)
  return mentor
}


module.exports = { createMentor }