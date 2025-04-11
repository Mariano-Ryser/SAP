const Product = require('./product.model')
const cloudinary = require('../../config/cloudinary');
const upload = require('../../middleware/multer.product');
// Configuración de Multer para una sola imagen
const uploadImage = upload.single('imagen');



const getProducts = async (req, res) => {
    try {
        // Obtener parámetros de filtrado
        const { sort, category, supplier, minPrice, maxPrice, lugarDeVenta, marca } = req.query;
        
        // Construir query de filtrado
        let query = { deleted: false };
        
        if (category) query.category = category;
        if (supplier) query.supplier = supplier;
        if (lugarDeVenta) query.lugarDeVenta = lugarDeVenta;
        if (marca) query.marca = marca;
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = parseFloat(minPrice);
            if (maxPrice) query.price.$lte = parseFloat(maxPrice);
        }
        
        // Construir opciones de ordenamiento
        let sortOptions = { _id: 1 }; // Por defecto ordenar por ID
        if (sort === 'price-asc') sortOptions = { price: 1 };
        if (sort === 'price-desc') sortOptions = { price: -1 };
        if (sort === 'name-asc') sortOptions = { name: 1 };
        if (sort === 'name-desc') sortOptions = { name: -1 };
        
        const products = await Product.find(query).sort(sortOptions);
        
        const total = products.reduce((sum, product) => {
            let price = product.price;
            if (price && typeof price === 'object' && '$numberDecimal' in price) {
                price = parseFloat(price.$numberDecimal);
            }
            return sum + Number(price) || 0;
        }, 0);

        res.status(200).json({
            ok: true,
            products,
            total: Number(total).toFixed(2)
        });

    } catch (error) {
        console.error('Error en getProducts:', error);
        res.status(500).json({ 
            ok: false, 
            message: 'Error al obtener productos',
            error: error.message 
        });
    }
};
const createProduct = async (req, res) => {
    try {
        uploadImage(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: err.message
                });
            }

            if(!req.body.name) {
                return res.status(400).json({
                    ok: false,
                    message: 'El campo Nombre del producto es obligatorio'
                });
            }

            let imageUrl = '';
            let publicId = '';

            // Subir imagen a Cloudinary si existe
            if (req.file) {
                try {
                    const result = await cloudinary.uploader.upload(req.file.path, {
                        folder: 'products'
                    });
                    imageUrl = result.secure_url;
                    publicId = result.public_id;
                } catch (uploadError) {
                    console.error('Error al subir a Cloudinary:', uploadError);
                    return res.status(500).json({
                        ok: false,
                        message: 'Error al subir la imagen'
                    });
                }
            }

            const newProduct = new Product({
                ...req.body,
                imagen: imageUrl,
                publicId: publicId
            });

            const product = await newProduct.save();
            
            res.status(201).json({
                ok: true,
                product
            });
        });
    } catch (error) {
        console.error('Error en createProduct:', error);
        res.status(500).json({
            ok: false,
            message: 'Error al crear producto',
            error: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
      // 1. Buscar el producto en MongoDB
      const product = await Product.findById(id);
      
      if (!product) {
        return res.status(404).json({ 
          ok: false, 
          message: 'Producto no encontrado' 
        });
      }
      
      // 2. Eliminar la imagen de Cloudinary si existe
      if (product.publicId) {
        await cloudinary.uploader.destroy(product.publicId)
          .catch(error => {
            console.warn('Advertencia: No se pudo eliminar la imagen de Cloudinary', error);
            // Continuamos aunque falle la eliminación en Cloudinary
          });
      }
      
      // 3. Eliminar el producto de MongoDB completamente
      await Product.findByIdAndDelete(id);
      
      res.status(200).json({ 
        ok: true, 
        message: 'Producto y su imagen asociada eliminados con éxito' 
      });
      
      console.log({ id }, 'Producto eliminado completamente');
      
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      res.status(500).json({ 
        ok: false, 
        error: error.message,
        message: 'Error al eliminar el producto' 
      });
    }
  };
// product.controller.js
const updateProduct = async (req, res) => {
    try {
      uploadImage(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            message: err.message
          });
        }
  
        const { id } = req.params;
        const product = await Product.findById(id);
        
        if (!product) {
          return res.status(404).json({
            ok: false,
            message: 'Producto no encontrado'
          });
        }
  
        let imageUrl = product.imagen;
        let publicId = product.publicId;
  
        // Si se subió una nueva imagen
        if (req.file) {
          // Eliminar la imagen anterior si existe
          if (publicId) {
            await cloudinary.uploader.destroy(publicId)
              .catch(error => console.warn('Error al eliminar imagen anterior:', error));
          }
  
          // Subir la nueva imagen
          const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'products'
          });
          imageUrl = result.secure_url;
          publicId = result.public_id;
        }
  
        // Actualizar el producto
        const updatedProduct = await Product.findByIdAndUpdate(id, {
          ...req.body,
          imagen: imageUrl,
          publicId: publicId
        }, { new: true });
  
        res.status(200).json({
          ok: true,
          product: updatedProduct
        });
      });
    } catch (error) {
      console.error('Error en updateProduct:', error);
      res.status(500).json({
        ok: false,
        message: 'Error al actualizar producto',
        error: error.message
      });
    }
  };

exports.uploadMiddleware = upload.single('imagen');

     module.exports = {
        getProducts,
        createProduct,
        deleteProduct,
        updateProduct
     }

     