const express = require('express')
const routerr = express.Router()
const notiController = require('./noti.controller')

//obtener notificaciones
routerr.get('/', notiController.getNotis)
//crear notificacion
routerr.post('/', notiController.createNoti)
//borrar notificacion
routerr.delete('/:id', notiController.deleteNoti)
//dar like a una notificacion
routerr.patch('/:id/like', notiController.likeNoti);

module.exports = routerr

