import express from 'express';
import { 
    getPersonajes, 
    createPersonaje, 
    deletePersonaje 
} from './personaje.controller.js';

const router = express.Router();

router.get('/', getPersonajes);
router.post('/', createPersonaje);
router.delete('/:id', deletePersonaje);

export default router;