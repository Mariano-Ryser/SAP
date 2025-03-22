const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authAdmin = require('../../middleware/authAdmin'); // Importar el middleware
const adminController = require('./admin.controller');


router.post(
  '/verify-key',
  // Validar la clave de administrador con express-validator
  [
    body('key')
      .notEmpty().withMessage('La clave es requerida')
      .isLength({ min: 6 }).withMessage('La clave debe tener al menos 6 caracteres'),
  ],
  // Si pasa, -> Llamar al controlador para verificar la clave Si la clave es correcta,
  //  genera un token JWT y lo devuelve al cliente.
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    adminController.verifyKey(req, res);
  }
);

router.get('/dashboard', authAdmin, adminController.getDashboard);

module.exports = router;