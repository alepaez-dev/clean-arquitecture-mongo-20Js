const Koder = require("../models/koder.model")

// Funciones
// Handlers

// 1- Uso de caso -> Crear un koder
const create = (koderData) => {
  // Crear un koder
  const koder = Koder.create(koderData)
  return koder
}

// Get Koder
// Actualizar Koder
// Eliminar Koder

module.exports = { create }