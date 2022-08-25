const User = require("../models/user.model")

// Crear un usuario
const createUser = (userData) => {
  const user = User.create(userData)
  return user
}


module.exports = {
  createUser
}