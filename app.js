// // // REQUERIMIENTOS Y CONSTANTES
const path = require('node:path'); //requiriendo el path de node
require('dotenv').config() //Variables de entorno

const express = require('express') 
const helmet = require('helmet') 
const dbConnect = require('./db') //PRIMERO Q TODO)
const corsMiddleware = require('./middleware/corsMiddleware'); // Importar el middleware de CORS
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware'); // Importar el middleware de rate limiting

const apisRouter = require('./routes/apis')
const adminRouter = require('./routes/admin'); // Ruta de administración
const personajeRouter = require('./routes/personaje')
const comentarRouter = require('./routes/comentar')
const notiRouter = require('./routes/noti')
const worteRouter = require('./routes/worte');
const productRouter = require('./routes/product')
const preguntaRouter = require("./routes/pregunta");
const imageRouter = require('./routes/imageRoutes');

// const meteoros = require('./apis/meteoros.json') 

const app = express()

app.use(helmet())
dbConnect(app)

// Usar el middleware de CORS
app.use(corsMiddleware);
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
 app.use('/api/v1/meteoros', apisRouter)
 
 app.get('/api/v1/meteoros', (req,res) => {
   res.json(meteoros)
   console.log(meteoros)
  })
  
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


 //CON ESTO SERVIMOS LOS ARCHIVOS ESTATICOS DE HMTL CSS Y JS DE LA CARPETA PUBLIC!
// app.use(express.static(path.join(__dirname, 'public'))) 



