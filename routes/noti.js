const express = require('express')
const routerr = express.Router()
const notiController = require('../controllers/noti')


routerr.get('/', notiController.getNotis)
routerr.post('/', notiController.createNoti)
routerr.delete('/:id', notiController.deleteNoti)
routerr.patch('/:id/like', notiController.likeNoti);

module.exports = routerr

