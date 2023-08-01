const mongoose = require('mongoose')

// // CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
const photoSchema = new mongoose.Schema({

    url: {
        type: String,
        required: true,
      },
    
      likes: {
        type: Number,
        default: 0,
      },
    },
);

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const Photo = mongoose.model('Photo', photoSchema);

//EXPORTACION DE MODULO
module.exports = Photo;
