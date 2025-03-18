const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // IMPORTACIÓN CORRECTA
const { uploadImage, getImages, likeImage, addComment, likeComment } = require('../controllers/imageController');

// Ruta para subir imágenes
router.post('/upload', upload.single('image'), uploadImage);
router.post('/:id/like', likeImage);


// COMENTARIOS DE LA IMAGEN
router.post('/:id/comment', addComment);
router.post('/:imageId/comment/:commentId/like', likeComment);

// Ruta para obtener imágenes
router.get('/', getImages);

module.exports = router;