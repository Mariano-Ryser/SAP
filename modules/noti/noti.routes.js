const express = require('express')
const router = express.Router()
const notiController = require('./noti.controller')
const Noti = require('./noti.model')

//obtener notificaciones
router.get('/', notiController.getNotis)
//crear notificacion
router.post('/', notiController.createNoti)
//borrar notificacion
router.delete('/:id', notiController.deleteNoti)
//dar like a una notificacion
router.patch('/:id/like', notiController.likeNoti);


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