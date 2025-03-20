const express = require('express');
const router = express.Router();
const authAdmin = require('../middleware/authAdmin'); // Importar el middleware

router.post('/verify-key', (req, res) => {
  const { key } = req.body;
  if (key === process.env.ADMIN_ACCESS_KEY) {
    res.status(200).json({ success: true, message: 'Clave correcta' });
  } else {
    res.status(403).json({ success: false, message: 'Clave incorrecta' });
  }
});

// Ruta protegida para el panel de administración
router.get('/dashboard', authAdmin, (req, res) => {
  res.json({ message: 'Bienvenido al panel de administración wacho!!' });
});


// Ruta para eliminar una imagen desde el panel de administración
router.delete('/images/:id', authAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    // Lógica para eliminar la imagen (debes implementarla en el controlador)
    // Ejemplo: await deleteImage(id);
    res.status(200).json({ ok: true, message: 'Imagen eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar la imagen:', error);
    res.status(500).json({ ok: false, message: 'Error al eliminar la imagen' });
  }
});

module.exports = router;
//TAREAS
//SOLO DEL ADMIN SE PODRA ELIMINAR IMAGENES, COMENTARIOS Y SUBIR IMAGENES 