const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // IMPORTACIÓN CORRECTA
const { uploadImage, getImages } = require('../controllers/imageController');

// Ruta para subir imágenes
router.post('/upload', upload.single('image'), uploadImage);

// Ruta para obtener imágenes
router.get('/', getImages);

module.exports = router;