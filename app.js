// REQUERIMIENTOS Y CONSTANTES (ahora imports)
import path from 'node:path';
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';

// Configurar variables de entorno
config();

// Inicializar la aplicación
const app = express();

// Importar conexión a DB y middlewares
import dbConnect from './db/index.js'; // Nota: extensión .js ahora es necesaria
// import corsMiddleware from './middleware/corsMiddleware.js';
import rateLimitMiddleware from './middleware/rateLimitMiddleware.js';

// Importar routers
import adminRouter from './modules/admin/admin.routes.js';
import comentarRouter from './modules/comentar/comentar.routes.js';
import imageRouter from './modules/image/image.routes.js';
import notiRouter from './modules/noti/noti.routes.js';
import personajeRouter from './modules/personaje/personaje.routes.js';
import preguntaRouter from './modules/pregunta/pregunta.routes.js';
import productRouter from './modules/product/product.routes.js';
import worteRouter from './modules/worte/worte.routes.js';

// Configurar middlewares
app.use(helmet());
// app.use(corsMiddleware);
app.use(rateLimitMiddleware);
app.use(express.json());

// Configurar conexión a la base de datos
dbConnect(app);

// Rutas
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/images', imageRouter);
app.use("/api/v1/preguntas", preguntaRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/notis', notiRouter);
app.use('/api/v1/wortes', worteRouter);
app.use('/api/v1/comentars', comentarRouter);
app.use('/api/v1/personajes', personajeRouter);

// Rutas estáticas
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/home.html'));
});

// Manejo de errores
app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
        res.status(403).json({ error: 'Acceso no permitido' });
    } else {
        next(err);
    }
});

// Última ruta (404)
app.use((req, res) => {
    res.status(404).send('<h1>404</h1>');
});

// Exportar la aplicación
export default app;