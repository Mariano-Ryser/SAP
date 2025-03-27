import Product from './product.model.js';

// Obtener productos
export const getProducts = async (req, res) => {
    try {
        const sort = 1;
        const allProducts = await Product.find({ deleted: false }).sort({ _id: sort });
        const products = allProducts.slice(6).reverse();
        res.status(200).json({ products });
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

// Crear producto
export const createProduct = async (req, res) => {
    try {
      const { file } = req;
      let imageUrl, cloudinaryId;
      
      if (file) {
        const result = await cloudinary.uploader.upload(file.path);
        imageUrl = result.secure_url;
        cloudinaryId = result.public_id;
      }
  
      const productData = {
        ...req.body,
        price: Number(req.body.price),
        quantity: Number(req.body.quantity || 1),
        ...(imageUrl && { imageUrl, cloudinaryId }),
        createdBy: req.userId
      };
  
      const product = await Product.create(productData);
      
      res.status(201).json({
        success: true,
        product
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error creating product',
        error: error.message
      });
    }
  };

// Eliminar producto (soft delete)
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndUpdate(id, { deleted: true });
        console.log(`Producto eliminado (ID: ${id})`);
        res.status(200).json({ ok: true, message: 'Producto eliminado con éxito!' });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).json({ ok: false, error: "Error al eliminar producto" });
    }
};