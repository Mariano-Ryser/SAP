const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Para cargar las variables de entorno

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // Recomendado para usar HTTPS
});

module.exports = cloudinary;

