const Image = require('../models/image'); // Asegúrate de que tienes un modelo de imagen
const cloudinary = require('../config/cloudinary');


// SUBIR IMAGEN A CLOUDINARY
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No se ha enviado ninguna imagen' });
    }

    // req.file.path YA es la URL segura de Cloudinary
    const imageUrl = req.file.path;
    const publicId = req.file.filename; // Guarda el public_id por si luego querés borrarla

    // Guardar en la base de datos
    const newImage = new Image({ imageUrl, publicId });
    await newImage.save();

    res.status(201).json({ message: 'Imagen subida con éxito', image: newImage });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).json({ message: 'Error al subir imagen' });
  }
};

// OBTENER IMÁGENES
const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    
    if (!images.length) {
      return res.status(404).json({ message: "No images found" });
    }

    // Aplicar transformaciones a las imágenes obtenidas
    const optimizedImages = images.map(image => {
      const imageUrl = image.imageUrl;

      // Aplicar las transformaciones directamente en la URL
      const optimizedUrl = cloudinary.url(image.imageUrl, {
        transformation: [
          { quality: 'auto', fetch_format: 'auto' },
          { width: 300, height: 300, crop: 'fill', gravity: 'auto' }
        ]
      });

      return { ...image._doc, optimizedUrl };
    });

    res.json({ images: optimizedImages });
  } catch (error) {
    console.error("Error al obtener imágenes:", error);
    res.status(500).json({ message: "Error al obtener imágenes" });
  }
};

module.exports = { uploadImage, getImages };

