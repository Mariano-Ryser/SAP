import mongoose from 'mongoose';

// Subdocumento para habilidades de combate
const combatSkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, default: 1, min: 1, max: 10 },
});

// Subdocumento para misiones
const missionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { 
        type: String, 
        enum: ['pending', 'in-progress', 'completed'], 
        default: 'pending' 
    }
});

// Esquema principal del personaje
const personajeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: false, min: 0, max: 120 },
    email: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    combatSkills: [combatSkillSchema],
    missions: [missionSchema]
}, { timestamps: true });

// Modelo del personaje
const Personaje = mongoose.model('Personaje', personajeSchema);

export default Personaje;