// Endpoints
const express = require("express")
const { create } = require("../usecases/koder.usecase")

// Haciendo router
const router = express.Router()

// Endpoint de crear
// /koders
router.post("/", async (request, response) => {
  // Recibir el request
  // Response
  try {
    const { body } = request
    const koder = await create(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        koder
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