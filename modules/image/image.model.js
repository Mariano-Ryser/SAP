import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  deleted: { type: Boolean, default: false },
});

const imageSchema = new mongoose.Schema({
  imageUrl: String,
  publicId: String,
  likes: { type: Number, default: 0 },
  deleted: { type: Boolean, default: false },
  comments: [commentSchema]
}, { timestamps: true });

export const Image = mongoose.model('Image', imageSchema);