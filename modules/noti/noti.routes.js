//modules/noti/noti.routes.js
const express = require('express')
const router = express.Router()
const notiController = require('./noti.controller')
const Noti = require('./noti.model')
// const authAdmin = require('../../middleware/authAdmin'); // Asegúrate de tener este middleware



router.get('/', notiController.getNotis)//obtener notificaciones
router.patch('/:id/like', notiController.likeNoti);//dar like a una notificacion

//PROTEGIDAS POR AUTH
router.post('/',  notiController.createNoti)//crear notificacion
router.delete('/:id', notiController.deleteNoti)//borrar notificacion

module.exports = router


router.get('/html', async (req, res) => {
  try {
    const notis = await Noti.find({}); // Usar el modelo Noti
    let html = '<h1>Notificaciones</h1><ul>';
    notis.forEach(noti => {
      html += `<li><strong>${noti.titulo}</strong>: ${noti.text}</li>`;
    });
    html += '</ul>';
    res.send(html);
  } catch (error) {
    res.status(500).send('Error al obtener las notificaciones');
  }
});