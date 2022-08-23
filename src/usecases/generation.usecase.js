const Generation = require("../models/generation.model")
const { createMentor } = require("../usecases/mentor.usecase")

// Funciones
// Handlers

// 1- Uso de caso -> Crear un koder
const createGeneration = (generationData) => {
  // Crear un koder
  generationData.mentors.map( async (mentor) => {
    mentor.generation = generationData.name
    await createMentor(mentor)
  })
  return Generation.create(generationData)
}


module.exports = { createGeneration }