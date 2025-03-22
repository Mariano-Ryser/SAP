const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }, // 💥 Ahora cada comentario tiene likes
  deleted: { type: Boolean, default: false },
});

const imageSchema = new mongoose.Schema({
  imageUrl: String,
  publicId: String,
  likes: { type: Number, default: 0 },
  deleted: { type: Boolean, default: false },

  // 💥 Ahora cada imagen tiene un array de comentarios
  comments: [commentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);