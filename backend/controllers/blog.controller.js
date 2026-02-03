import fs from "fs";
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

import imagekit from "../utils/ImageKit.js";
import BlogPost from "../models/BlogPostModel.js";

const htmlToText = (html) => {
    const window = new JSDOM('').window;
    const purify = DOMPurify(window);
    const clean = purify.sanitize(html);
    const div = window.document.createElement('div');
    div.innerHTML = clean;
    return div.textContent || div.innerText || '';
};

export const addBlog = async (req, res) => {
    try {
        const window = new JSDOM('').window;
        const purify = DOMPurify(window);

        const { title, subtitle, content, category } = req.body;
        const author = req.user.id;
        const image = req.file;

        if (!title || !category || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Upload image to ImageKit
        const fileBuffer = fs.readFileSync(image.path);
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: image.originalname,
            folder: "/blogs"
        })

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: '1280' }
            ],
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT.replace('http://', 'https://')
        })

        const imageUrl = optimizedImageUrl;

        const newBlog = await BlogPost.create({
            title,
            subtitle,
            author,
            content: purify.sanitize(content),
            image: imageUrl,
            category,
        })
        if (newBlog) {
            res.status(201).json({ message: "Blog added successfully" })
        }


    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogPost.findById(id).populate("author", "username");
        const blogWithPlainText = {
            ...blog.toObject(),
            content: htmlToText(blog.content)
        };
        return res.status(200).json(blogWithPlainText)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogPost.find();
        const processedBlogs = blogs.map(blog => ({
            ...blog.toObject(),
            content: htmlToText(blog.content)
        }));
        return res.status(200).json(processedBlogs);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const getBlogsByUserId=async (req, res)=>{
    try {
        const userBlogs=await BlogPost.find({author: req.user.id}).populate("author", "username")
        const processedBlogs = userBlogs.map(blog => ({
            ...blog.toObject(),
            content: htmlToText(blog.content)
        }));
        return res.status(200).json(processedBlogs);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const deleteBlogById=async (req, res)=>{
    try {
        const {id}=req.body;
        const deletedBlog=await BlogPost.findOneAndDelete({_id: id});
        return res.status(200).json({message: "Blog deleted successfully"});
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}