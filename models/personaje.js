const mongoose = require('mongoose')

// // CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
// Subdocumento para habilidades de combate
const combatSkillSchema = mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, default: 1, min: 1, max: 10 }, // Nivel de habilidad entre 1 y 10
});

// Subdocumento para misiones
const missionSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }
});

const personajeSchema = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: false, min: 0, max: 120 },
    email: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    
    // healt: { type: Number, default: 100, min: 110, max: 200 },
    // mana: { type: Number, default: 100, min: 110, max: 200 }, // Mana o puntos de energía mágica
    // stamina: { type: Number, default: 100, min: 100, max: 500 },

    // height: { type: Number, required: true, min: 50, max: 250 }, // Altura en cm, valores razonables para humanos
    // weight: { type: Number, required: true, min: 3, max: 300 }, // Peso en kg, valores razonables
    // bloodType: { type: String, enum: ['A', 'B', 'AB', 'O'], required: true },
    // strength: { type: Number, default: 5, min: 0, max: 100 }, // Valores entre 0 y 100
    // agility: { type: Number, default: 5, min: 0, max: 100 },
    // intelligence: { type: Number, default: 5, min: 0, max: 100 },
    // charisma: { type: Number, default: 5, min: 0, max: 100 },
    // dexterity: { type: Number, default: 5, min: 0, max: 100 },
    // luck: { type: Number, default: 5, min: 0, max: 100 },
    // specialAbilities: [{ type: String }],
    // combatSkills: [combatSkillSchema], // Lista de habilidades de combate como subdocumentos
    // inventory: [{ 
    //     itemName: { type: String, required: true },
    //     quantity: { type: Number, default: 1, min: 0 }
    // }],
    // alliances: [{ 
    //     name: { type: String, required: true },
    //     description: { type: String }
    // }],
    // missions: [missionSchema], // Lista de misiones como subdocumentos
    // role: { type: String, enum: ['Warrior', 'Mage', 'Archer', 'Rogue', 'Healer'], default: 'Warrior' }, // Rol del personaje en el juego


}, { timestamps: true });

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const Personaje = mongoose.model('Personaje', personajeSchema,)  

//EXPORTACION DE MODULO
module.exports = Personaje
