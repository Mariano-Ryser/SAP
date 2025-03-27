import express from 'express';
import { 
    getWortes, 
    createWorte, 
    deleteWorte, 
    likeWorte 
} from './worte.controller.js';

const router = express.Router();

router.get('/', getWortes);
router.post('/', createWorte);
router.delete('/:id', deleteWorte);
router.patch('/:id/like', likeWorte);

export default router;