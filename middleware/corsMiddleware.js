import cors from 'cors';

export default cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://www.deep-zeep.com',
        'https://zeep-front.vercel.app',
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
});