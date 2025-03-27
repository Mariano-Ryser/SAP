import mongoose from 'mongoose';

const worteSchema = new mongoose.Schema({
    palabra: { type: String, required: true },
    significado: { type: String, required: true },
    ejemplo1: { type: String, required: true },
    ejemplo2: { type: String, required: false },
    ejemplo3: { type: String, required: false },
    gelernt: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    likes: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Worte', worteSchema);