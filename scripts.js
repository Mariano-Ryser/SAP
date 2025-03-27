import { config } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

// Configurar variables de entorno
config();

// Configurar Cloudinary
cloudinary.config({
  cloud_name: 'dgkidoifi',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Función autoinvocada async para probar la subida
(async () => {
  try {
    // Subir imagen
    const results = await cloudinary.uploader.upload('./images/oja.png');
    console.log('✅ Imagen subida:', results);
    
    // Generar URL transformada
    const url = cloudinary.url(results.public_id, {
      transformation: [
        {
          quality: 'auto',
          fetch_format: 'auto'
        },
        {
          width: 300,
          height: 300,
          crop: 'fill',
          gravity: 'auto'
        }
      ]
    });
    
    console.log('🔗 URL transformada:', url);
  } catch (error) {
    console.error('❌ Error:', error);
  }
})();