const express = require('express')
const routerr = express.Router()
const comentarController = require('../controllers/comentar')



routerr.get('/', comentarController.getComentars)
routerr.post('/', comentarController.createComentar)
routerr.delete('/:id', comentarController.deleteComentar)


module.exports = routerr
