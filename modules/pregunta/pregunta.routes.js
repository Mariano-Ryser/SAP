import express from 'express';
import { 
  getPreguntas, 
  createPregunta,
  deletePregunta
} from './pregunta.controller.js';

const router = express.Router();

router.get('/', getPreguntas);
router.post('/', createPregunta);
router.delete('/:id', deletePregunta);

export default router;