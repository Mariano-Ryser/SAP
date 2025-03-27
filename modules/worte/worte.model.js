// requerimos mongoose
const mongoose = require('mongoose')

const worteSchema = mongoose.Schema({
    palabra: { type: String, required: true },
    significado: { type: String, required: true },
    ejemplo1: { type: String, required: true },
    ejemplo2: { type: String, required: false },
    ejemplo3: { type: String, required: false },
    gelernt:  { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },   
 
}, { timestamps: true });

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN

const Worte = mongoose.model('Worte', worteSchema,)

    //Exportamos modulo 
    module.exports = Worte 
    
