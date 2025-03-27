import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    store: { type: String, required: true }, // Supermercado/almacén
    imageUrl: String, // Para Cloudinary
    unit: { type: String, required: true }, // kg, g, l, unidades
    quantity: { type: Number, default: 1 },
    brand: String,
    deleted: { type: Boolean, default: false }
}, { timestamps: true });


const ticketSchema = new mongoose.Schema({
    store: { type: String, required: true },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        unitPrice: Number
    }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Si implementas autenticación
}, { timestamps: true });


export default mongoose.model('Product', productSchema);

