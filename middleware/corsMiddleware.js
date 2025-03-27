import cors from 'cors';

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://www.deep-zeep.com',
        'https://zeep-front.vercel.app',
        'https://zeep-front.vercel.app/' // Algunos navegadores pueden necesitar esto
      ] 
    : ['http://localhost:3000'],
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