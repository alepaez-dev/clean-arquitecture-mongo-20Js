const Generation = require("../models/generation.model")
const { createMentor } = require("../usecases/mentor.usecase")

// Crear generacion
const createGeneration = async (generationData) => {
  // Estructuramos mentores
  const mentorsWithGeneration = generationData.mentors.map((mentor) => ({...mentor, generation: generationData.name}))
  // Creamos los mentores
  const mentors = await createMentor(mentorsWithGeneration)
  // Crear la generacion, con la data de generacion + los mentores ya creados
  const generation = await Generation.create({...generationData, mentors})
  return generation
}

module.exports = { createGeneration }