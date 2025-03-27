import express from 'express';
import { body, validationResult } from 'express-validator';
import authAdmin from '../../middleware/authAdmin.js';
import { verifyKey, getDashboard } from './admin.controller.js';

const router = express.Router();

router.post(
  '/verify-key',
  [
    body('key')
      .notEmpty().withMessage('La clave es requerida')
      .isLength({ min: 6 }).withMessage('La clave debe tener al menos 6 caracteres'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    verifyKey(req, res); // Usa la función importada directamente
  }
);

router.get('/dashboard', authAdmin, getDashboard);

export default router; 