const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 50, // límite de 50 solicitudes por ventana
  message: 'Demasiadas solicitudes desde esta IP (100), por favor intenta nuevamente después de 15 minutos',
});

module.exports = limiter;