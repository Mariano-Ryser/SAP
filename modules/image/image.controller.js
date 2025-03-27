import { Image } from './image.model.js';
import cloudinary from '../../config/cloudinary.js';

// Subir imagen a Cloudinary
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No se ha enviado ninguna imagen' });
    }

    const newImage = new Image({
      imageUrl: req.file.path,
      publicId: req.file.filename
    });
    
    await newImage.save();
    res.status(201).json({ message: 'Imagen subida con éxito', image: newImage });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).json({ message: 'Error al subir imagen' });
  }
};

// Obtener imágenes con URLs optimizadas
export const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    
    if (!images.length) {
      return res.status(404).json({ message: "No images found" });
    }

    const optimizedImages = images.map(image => ({
      ...image._doc,
      optimizedUrl: cloudinary.url(image.imageUrl, {
        transformation: [
          { quality: 'auto', fetch_format: 'auto' },
          { width: 300, height: 300, crop: 'fill', gravity: 'auto' }
        ]
      })
    }));

    res.json({ images: optimizedImages });
  } catch (error) {
    console.error("Error al obtener imágenes:", error);
    res.status(500).json({ message: "Error al obtener imágenes" });
  }
};

// Dar like a imagen
export const likeImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndUpdate(
      req.params.id, 
      { $inc: { likes: 1 } }, 
      { new: true }
    );
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: 'Error al dar like' });
  }
};

// Agregar comentario
export const addComment = async (req, res) => {
  try {
    const image = await Image.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: { text: req.body.text } } },
      { new: true }
    );
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: 'Error al agregar comentario' });
  }
};

// Dar like a comentario
export const likeComment = async (req, res) => {
  const { imageId, commentId } = req.params;
  try {
    const image = await Image.findById(imageId);
    if (!image) return res.status(404).json({ message: 'Imagen no encontrada' });

    const comment = image.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comentario no encontrado' });

    comment.likes += 1;
    await image.save();

    res.status(200).json({ success: true, likes: comment.likes });
  } catch (error) {
    console.error('Error al dar like al comentario:', error);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
};

// Eliminar imagen
export const deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ ok: false, message: 'Imagen no encontrada' });
    }

    await cloudinary.uploader.destroy(image.publicId);
    await Image.findByIdAndDelete(req.params.id);

    res.status(200).json({ ok: true, message: 'Imagen eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar la imagen:', error);
    res.status(500).json({ ok: false, message: 'Error al eliminar la imagen' });
  }
};