import express from 'express';
import upload from '../../middleware/multer.js';
import {uploadImage,
        getImages,
        likeImage,
        addComment,
        likeComment,
        deleteImage } from './image.controller.js';

const router = express.Router();

router.get('/', getImages);
router.post('/upload', upload.single('image'), uploadImage);
router.post('/:id/like', likeImage);
router.post('/:id/comment', addComment);
router.post('/:imageId/comment/:commentId/like', likeComment);
router.delete('/:id', deleteImage);

export default router;