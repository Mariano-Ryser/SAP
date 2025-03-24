
const cors = require('cors');

const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [
    'https://www.deep-zeep.com',
     'https://zeep-front.vercel.app',
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
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Admin-Access-Key'],
  credentials: true,
};

module.exports = cors(corsOptions);
