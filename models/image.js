const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 } // 💥 Ahora cada comentario tiene likes
});

const imageSchema = new mongoose.Schema({
  imageUrl: String,
  publicId: String,
  likes: { type: Number, default: 0 },
  comments: [commentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);