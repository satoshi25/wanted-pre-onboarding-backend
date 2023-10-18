import express from 'express';
import 'express-async-errors';
import * as postController from '../controller/post.js';


const router = express.Router();

router.get('/', postController.getPosts);

router.get('/:id', postController.getPost);

router.post('/', postController.createPost);

router.patch('/:id', postController.updatePost);

router.delete('/:id', postController.removePost);

export default router;