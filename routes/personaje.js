const express = require('express')
const char = express.Router()
const personajeController = require('../controllers/personaje')


char.get('/', personajeController.getPersonajes)
char.post('/', personajeController.createPersonaje)
char.delete('/:id', personajeController.deletePersonaje)


module.exports = char