// // // REQUERIMIENTOS Y CONSTANTES
const path = require('node:path'); //requiriendo el path de node
const express = require('express') 
const cookieParser = require('cookie-parser');
require('dotenv').config() //Variables de entorno

const app = express()
const helmet = require('helmet') 
const dbConnect = require('./db') //PRIMERO Q TODO)

const rateLimitMiddleware = require('./middleware/rateLimitMiddleware'); // Importar el middleware de rate limiting

const adminRouter = require('./modules/admin/admin.routes');
const comentarRouter = require('./modules/comentar/comentar.routes')
const imageRouter = require('./modules/image/image.routes')
const notiRouter = require('./modules/noti/noti.routes')
const personajeRouter = require('./modules/personaje/personaje.routes')
const preguntaRouter = require('./modules/pregunta/pregunta.routes')
const productRouter = require('./modules/product/product.routes')
const worteRouter = require('./modules/worte/worte.routes')
const palabrasRouter = require("./modules/palabra/palabra.routes");
const noticiasRouter = require("./modules/noticia/noticia.routes")

// Los Cors se maneja desde Azure App Service
const corsMiddleware = require('./middleware/corsMiddleware'); 
app.use(cookieParser());
app.use(corsMiddleware);

app.use(helmet())
dbConnect(app)

// Aplicar rate limiting a todas las rutas
app.use(rateLimitMiddleware);

//SIEMPRE ARRIBA DE LAS RUTAS express.json() para que pueda leer el body
app.use(express.json())

// Rutas
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/images', imageRouter);
app.use("/api/v1/preguntas", preguntaRouter);
app.use('/api/v1/products', productRouter)
app.use('/api/v1/notis', notiRouter)
app.use('/api/v1/wortes', worteRouter)
app.use('/api/v1/comentars', comentarRouter)
app.use('/api/v1/personajes', personajeRouter)
app.use("/api/v1/palabras", palabrasRouter);
app.use('/api/v1/noticias', noticiasRouter); 

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  })
app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/home.html'));
  })

  
// Manejo de errores
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({ error: 'Acceso no permitido' });
  } else {
    next(err);
  }
});

//la ultima que llega..
app.use((req,res) => {
  res.status(404).send('<h1>404</h1>')
})

