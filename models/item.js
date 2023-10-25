// requerimos mongoose

const mongoose = require('mongoose')



const itemSchema = mongoose.Schema({
    name:{type: String, required: true},
    
    mesCreacion: {type: String, },
},


{ timestamps: true })


//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN

const Item = mongoose.model('Item', itemSchema,)

    //Exportamos modulo 
    module.exports = Item 
    