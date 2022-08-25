const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const createError = require("http-errors")
const jwt = require("../lib/jwt.lib")

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

  // Regresarle el token
  const token = jwt.sign({ id: user._id })
  return token
}

module.exports = {
  login
}