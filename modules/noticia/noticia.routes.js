
const express = require('express');
const router = express.Router();
const noticiaController = require('./noticia.controller');

// Usa el middleware de subida de archivos
router.post('/', 
  noticiaController.uploadMiddleware,
  noticiaController.crearNoticia
);

router.get('/', noticiaController.obtenerNoticiasResumen);
router.get('/:id', noticiaController.obtenerNoticiaCompleta);
router.delete('/:id', noticiaController.eliminarNoticia);

module.exports = router;
