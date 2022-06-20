// // // REQUERIMIENTOS Y CONSTANTES
require('dotenv').config() //Variables de entorno
const express = require('express') 
const mongoose = require('mongoose')
var cors = require('cors')  //Cors permiso para interaccion entre servidores

// const path = require('path')  //Para hacer el camino a archivos estaticos
// const axios = require('axios')  // Para hacer peticiones APIS del lado del servidor

const app = express()
app.use(cors()) //Ejecutando midelwer

// // // CONECCION CON LA BASE DE DATOS MONGO DB MONGOSE!
mongoose.connect(
    `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    .then( (result) => {
        app.listen(PORT, () => {
            console.log(`servidor escuchando en puerto ${PORT}`)
        })
        console.log("Conexion exitosa, mongo db")
    })
     .catch((err) => console.log(err))



// // CREAMOS EL ESQUEMA DE LA BASE DE DATOS EN MONGO
    const productSchema = mongoose.Schema({
            name: {type: String, required: true},
            price: Number,
        },
        { timestamps: true })

    const Product = mongoose.model('Product', productSchema,)  //ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN


 app.use(express.json())

 app.post('/api/v1/products',  (req, res) => {

    const newProduct = new Product(req.body)

     newProduct
         .save()
         .then( result => {
         res.status(201).json({ok: true})
          })
         .catch((err) => console.log(err))
        next()
 } )


 //CON ESTO SERVIMOS LOS ARCHIVOS ESTATICOS DE HMTL CSS Y JS DE LA CARPETA PUBLIC!
// app.use(express.static(path.join(__dirname, 'public'))) 

const PORT = process.env.PORT

