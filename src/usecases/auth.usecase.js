const User = require("../models/user.model")

// Login
const login = async (email, textPlainPassword) => {

  // 1 - Es comprobar que el correo si sea con el de mi base de datos
  const user = await User.findOne({ email })
  console.log("user:", user)
  // Si el usuario es null -> No me lo encontro -> No hay alguien con ese correo
  if(!user) {
    // Crear error
    const error = new Error("No es el correo correcto")
    console.log("error:", error)
    error.status = 401
    // Lanzar error
    throw error
  }

  console.log("Si funciona")
  // findOne

  // 2 - Es comprobar que la password si sea con el de mi base de datos
}

module.exports = {
  login
}