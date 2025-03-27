import express from 'express';
import { 
  getNotis, 
  createNoti, 
  deleteNoti, 
  likeNoti 
} from './noti.controller.js';
import Noti from './noti.model.js';
import authAdmin from '../../middleware/authAdmin.js';

const router = express.Router();

// Rutas públicas
router.get('/', getNotis);
router.patch('/:id/like', likeNoti);

// Rutas protegidas (solo admin)
router.post('/', authAdmin, createNoti);
router.delete('/:id', authAdmin, deleteNoti);

// Ruta especial HTML
router.get('/html', async (req, res) => {
  try {
    const notis = await Noti.find({});
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

export default router;