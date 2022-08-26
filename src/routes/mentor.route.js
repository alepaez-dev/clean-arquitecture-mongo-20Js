const express = require("express")
const auth = require("../middlewares/auth.middleware")
const { 
  createMentor,
  getMentor,
  allMentors,
  updateMentor,
  removeMentor
  } = require("../usecases/mentor.usecase")

const router = express.Router()

// router
router.use(auth)
// Endpoints

router.post("/", async (request, response) => {

  const { body } = request
  try {
    const mentor = await createMentor(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        mentor
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

// Path param
// Arquitecture rest -> /recursos/identificador
// identificador
router.get("/:id", async (request, response) => {
  try {
    // Path params
    const { params } = request
    const mentor = await getMentor(params.id) 
    // Si no ponemos status -> 200
    response.json({
      success: true,
      data: {
        mentor
      }
    })
  }catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// Query params
// ?parametro=valor&otroparametro=valore&otroparamtrx2=valor
router.get("/", async (request, response) => {
  try{
    const { query } = request
    // {}
    // { name: Alfredo }
    const mentors = await allMentors(query)
    response.json({
      success: true,
      data: {
        mentors
      }
    })
  }catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch("/:id", async (request, response) => {
  try{
    const { params, body } = request
    const mentor = await updateMentor(params.id, body)

    response.json({
      success: true,
      data: {
        mentor
      }
    })

  }catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete("/:id", async (request, response) => {
  try{
    const { params } = request
    const mentor = await removeMentor(params.id)
    response.json({
      success: true,
    })

  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
module.exports = router