const Noticia = require('./noticia.model');
const cloudinary = require('../../config/cloudinary');
const multer = require('multer');

// Configura Multer para manejar archivos en memoria
const upload = multer({ storage: multer.memoryStorage() });

exports.crearNoticia = async (req, res) => {
  try {
    // Verificar si hay imagen
    let imagenUrl = '';
    let publicId = '';

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'noticias' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(req.file.buffer);
      });

      imagenUrl = result.secure_url;
      publicId = result.public_id;
    }

    // Crear noticia
    const nuevaNoticia = new Noticia({
      ...req.body,
      secciones: Array.isArray(req.body.secciones) ? req.body.secciones : JSON.parse(req.body.secciones),
      imagen: imagenUrl,
      publicId,
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString()
    });

    await nuevaNoticia.save();

    res.status(201).json({
      ok: true,
      noticia: nuevaNoticia
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      ok: false,
      error: error.message
    });
  }
};

// Configuración de Multer para una sola imagen
// Esta configuración se puede reutilizar en otros controladores si es necesario
exports.uploadMiddleware = upload.single('imagen');

exports.obtenerNoticiasResumen = async function(req, res) {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 12; 
    const skip = (page - 1) * limit;

    const noticias = await Noticia.find()
      .sort({ createdAt: -1 }) // Ordenar por fecha de creación descendente
      .skip(skip) // Saltar los primeros (page - 1) * limit documentos
      .limit(limit) // Limitar a 'limit' documentos
      .select('titulo autor descripcion imagen fecha hora'); // Solo campos necesarios

    const total = await Noticia.countDocuments(); // Contar el total de documentos

    res.status(200).json({ 
      ok: true, 
      noticias,
      total,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Error al obtener resumen de noticias:', error);
    res.status(500).json({ ok: false, error: error.message });
  }
};
exports.obtenerNoticiaCompleta = async function(req, res) {
  try {
    const noticia = await Noticia.findById(req.params.id);
    if (!noticia) {
      return res.status(404).json({ ok: false, message: 'Noticia no encontrada' });
    }
    res.status(200).json({ ok: true, noticia });
  } catch (error) {
    console.error('Error al obtener noticia completa:', error);
    res.status(500).json({ ok: false, error: error.message });
  }
};
exports.eliminarNoticia = async function(req, res) {
  const { id } = req.params;
  
  try {
    // 1. Buscar la noticia en MongoDB
    const noticia = await Noticia.findById(id);
    
    if (!noticia) {
      return res.status(404).json({ 
        ok: false, 
        message: 'Noticia no encontrada' 
      });
    }
    
    // 2. Eliminar la imagen de Cloudinary si existe
    if (noticia.publicId) {
      await cloudinary.uploader.destroy(noticia.publicId)
        .catch(error => {
          console.warn('Advertencia: No se pudo eliminar la imagen de Cloudinary', error);
          // Continuamos aunque falle la eliminación en Cloudinary
        });
      }
      
      
      // 3. Eliminar la noticia de MongoDB
      await Noticia.findByIdAndDelete(id);
      
      res.status(200).json({ 
        ok: true, 
        message: 'Noticia y su imagen asociada eliminadas con éxito' 
      });
      
    } catch (error) {
      console.error('Error al eliminar noticia:', error);
      res.status(500).json({ 
        ok: false, 
        error: error.message,
        message: 'Error al eliminar la noticia' 
      });
    }
  };
  
  

