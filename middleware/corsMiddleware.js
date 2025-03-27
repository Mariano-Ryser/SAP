import cors from 'cors';

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
        console.error(`CORS bloqueado para la solicitud de origen: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'Admin-Access-Key',
      'x-auth-token'
    ],
    credentials: true,
    exposedHeaders: ['x-auth-token']
  };

export default cors(corsOptions);