import express from 'express';
import { 
    getProducts, 
    createProduct, 
    deleteProduct 
} from './product.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

export default router;