import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 150, // límite de 150 solicitudes por ventana
  message: 'Demasiadas solicitudes desde esta IP, por favor intenta nuevamente después de 5 minutos'
});

export default limiter;