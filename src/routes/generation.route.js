// Endpoints
const express = require("express")
const { createGeneration } = require("../usecases/generation.usecase")
const formatDates = require("../middlewares/formatDates.middleware")

// Haciendo router
const router = express.Router()

// Endpoint de crear
// /koders
router.post("/",  async (request, response) => {
  // Recibir el request
  // Response
  try {
    const { body } = request
    const generation = await createGeneration(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        generation
      }
    })
  } catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})


// Exportar la ruta -> router
module.exports = router