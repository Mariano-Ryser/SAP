const express = require('express')
const routerr = express.Router()
const notiController = require('../controllers/noti')


routerr.get('/', notiController.getNotis)
routerr.post('/', notiController.createNoti)
routerr.delete('/:id', notiController.deleteNoti)

module.exports = routerr
