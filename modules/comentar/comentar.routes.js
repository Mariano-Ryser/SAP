import express from 'express';
import { 
  getComentars, 
  createComentar, 
  deleteComentar, 
  likeComentar 
} from './comentar.controller.js';

const router = express.Router();

router.get('/', getComentars);
router.post('/', createComentar);
router.delete('/:id', deleteComentar);
router.patch('/:id/like', likeComentar);

export default router;