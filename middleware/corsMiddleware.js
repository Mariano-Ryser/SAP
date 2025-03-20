// middleware/corsMiddleware.js
const cors = require('cors');

const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://zeep-front.vercel.app',
    // 'https://zeep-back.ejemplo.com',    en el caso de querer agregar mas dominios
    // 'https://zeep-back.ejemplo2.com/',
  ] 
  : [
    'http://localhost:3000',
    // 'http://localhost:3001',   
    // 'http://localhost:3002',
  ];


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

module.exports = cors(corsOptions);