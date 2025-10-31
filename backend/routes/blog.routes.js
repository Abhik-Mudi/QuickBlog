import express from "express";
import { addBlog, getBlogById , getAllBlogs} from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogById);
blogRouter.post("/add", isLoggedIn, upload.single("image"), addBlog)

export default blogRouter;