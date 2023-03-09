// // // REQUERIMIENTOS Y CONSTANTES
require('dotenv').config() //Variables de entorno
const express = require('express') 
const helmet = require('helmet') 
const dbConnect = require('./db')
const cors = require('cors')  //Cors permiso para interaccion entre servidores
const comentarRouter = require('./routes/comentar')
const productRouter = require('./routes/product')
const personajeRouter = require('./routes/personaje')

const app = express()
app.use(helmet())
dbConnect(app)
// const path = require('path')  //Para hacer el camino a archivos estaticos
// const axios = require('axios')  // Para hacer peticiones APIS del lado del servidor

app.use(cors({origin: true})) //Ejecutando midelwer

 app.use(express.json())

 app.use('/api/v1/products', productRouter)
 app.use('/api/v1/comentars', comentarRouter)
 app.use('/api/v1/personajes', personajeRouter)


 //CON ESTO SERVIMOS LOS ARCHIVOS ESTATICOS DE HMTL CSS Y JS DE LA CARPETA PUBLIC!
// app.use(express.static(path.join(__dirname, 'public'))) 



