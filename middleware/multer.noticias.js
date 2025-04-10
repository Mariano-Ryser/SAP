// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const cloudinary = require('../config/cloudinary');

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: (req, file) => ({
//     folder: 'noticias',
//     public_id: `${file.fieldname}-${Date.now()}`,
//     allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
//     transformation: [{ width: 1200, crop: 'limit', quality: 'auto' }]
//   })
// });

// const fileFilter = (req, file, cb) => {
//   // Rechazar archivos vacíos
//   if (!file.originalname || file.size === 0) {
//     return cb(new Error('El archivo está vacío'), false);
//   }
  
//   // Solo aceptar imágenes
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Solo se permiten imágenes (JPG, PNG, WEBP)'), false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB
//     files: 5 // Máximo 5 archivos
//   },
//   fileFilter: fileFilter
// });

// module.exports = upload.fields([
//   { name: 'imagen', maxCount: 1 },
//   { name: 'seccionImagen0', maxCount: 1 },
//   { name: 'seccionImagen1', maxCount: 1 },
//   { name: 'seccionImagen2', maxCount: 1 }
// ]);