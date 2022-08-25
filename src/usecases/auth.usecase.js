const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const createError = require("http-errors")

// Login
const login = async (email, textPlainPassword) => {

  // 1 - Es comprobar que el correo si sea con el de mi base de datos
  const user = await User.findOne({ email })
  // Si el usuario es null -> No me lo encontro -> No hay alguien con ese correo
  if(!user) throw createError(401, "No estas autorizado")

  // si encontramos al user con ese correo
  // 2 - Es comprobar que la password si sea con el de mi base de datos
  const isValidPassword = await bcrypt.compare(textPlainPassword, user.password)
  if(!isValidPassword) throw createError(401, "No estas autorizado")
}

module.exports = {
  login
}