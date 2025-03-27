const express = require('express')
const routerr = express.Router()
const comentarController = require('./comentar.controller')


routerr.get('/', comentarController.getComentars)
routerr.post('/', comentarController.createComentar)
routerr.delete('/:id', comentarController.deleteComentar)

// Nueva ruta para incrementar likes
routerr.patch('/:id/like', comentarController.likeComentar);

module.exports = routerr
