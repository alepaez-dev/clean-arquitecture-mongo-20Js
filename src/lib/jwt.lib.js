const jwt = require("jsonwebtoken")

const { JWT_SECRET_KEY } = process.env

// Parametro por defecto
const sign = (payload = {}) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "8h" })
}

// Verificar que el token si sea veridico
const verify = (token) => {
  return jwt.verify(token, JWT_SECRET_KEY)
}
module.exports = { sign, verify } 