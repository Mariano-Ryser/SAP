const express = require('express')
const routerr = express.Router()
const apisController = require('../controllers/apis')


routerr.get('/', apisController.getApis)
// routerr.post('/', comentarController.createComentar)
// routerr.delete('/:id', comentarController.deleteComentar)

module.exports = routerr