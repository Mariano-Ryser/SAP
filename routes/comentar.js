const express = require('express')
const routerr = express.Router()
const comentarController = require('../controllers/comentar')


routerr.post('/', comentarController.createComentar)
routerr.get('/', comentarController.getComentars)
routerr.delete('/:id', comentarController.deleteComentar)

module.exports = routerr