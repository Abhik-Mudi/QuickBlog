import express from 'express'
import { addComment, getAllComments, getAllCommentsByUser, getComments } from '../controllers/comment.controller.js';
import isLoggedIn from '../middlewares/isLoggedIn.js';

const commentRouter=express.Router();

commentRouter.get("/", getAllComments)
commentRouter.get("/:id", getComments)
commentRouter.get("/user/:id", isLoggedIn, getAllCommentsByUser)
commentRouter.post("/:id", isLoggedIn, addComment)

export default commentRouter;