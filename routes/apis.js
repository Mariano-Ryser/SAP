const express = require('express')
const routerr = express.Router()
const apisController = require('../controllers/apis')


routerr.get('/', apisController.getApis)

module.exports = routerr