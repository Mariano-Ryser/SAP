// middleware/corsMiddleware.js
const cors = require('cors');

const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [
    'https://www.deep-zeep.com',
     'https://zeep-front.vercel.app',
    // 'https://zeep-back.ejemplo.com',    en el caso de querer agregar mas dominios
    // 'https://zeep-back.ejemplo2.com/',
  ] 
  : ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Permitir estos métodos
  allowedHeaders: ['Content-Type', 'Authorization', 'Admin-Access-Key'], // Permitir el encabezado personalizado
  credentials: true,
};

module.exports = cors(corsOptions);

