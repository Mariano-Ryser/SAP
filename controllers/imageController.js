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

const likeImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: 'Error al dar like' });
  }
};

const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const image = await Image.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: { text } } },
      { new: true }
    );
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: 'Error al agregar comentario' });
  }
};

const likeComment = async (req, res) => {
  const { imageId, commentId } = req.params;
  try {
    const image = await Image.findById(imageId);
    if (!image) return res.status(404).json({ message: 'Imagen no encontrada' });

    const comment = image.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comentario no encontrado' });

    comment.likes = (comment.likes || 0) + 1;
    await image.save();

    res.status(200).json({ success: true, likes: comment.likes });
  } catch (error) {
    console.error('Error al dar like al comentario:', error);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
};

module.exports = { uploadImage, getImages, likeImage, addComment, likeComment };

