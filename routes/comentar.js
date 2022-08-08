const express = require('express')
const routerr = express.Router()
const comentarController = require('../controllers/comentar')


routerr.post('/', comentarController.createComentar)
routerr.get('/', comentarController.getComentars)
// router.delete('/:id', productController.deleteProducts)

module.exports = routerr