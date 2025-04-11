const express = require('express')
const router = express.Router()
const productController = require('./product.controller')


router.get('/', productController.getProducts)
router.post('/', productController.createProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct);

module.exports = router