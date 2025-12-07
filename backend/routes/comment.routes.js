import express from 'express'
import { addComment, getComments } from '../controllers/comment.controller.js';
import isLoggedIn from '../middlewares/isLoggedIn.js';

const commentRouter=express.Router();

commentRouter.get("/:id", getComments)
commentRouter.post("/:id", isLoggedIn, addComment)

export default commentRouter;