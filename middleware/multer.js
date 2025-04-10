const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary'); // Asegúrate de que esta ruta es correcta

// Configuración del almacenamiento en Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Carpeta en Cloudinary
    // format: async () => 'png', // Cambia el formato si necesitas otro (jpg, webp, etc.)
    public_id: (req, file) => file.originalname.split('.')[0], // Nombre del archivo sin extensión
  },
});


const upload = multer({ storage }); // Puedes cambiar el nombre del campo si lo necesitas

module.exports = upload; // Asegúrate de que esto está exportando `upload`
