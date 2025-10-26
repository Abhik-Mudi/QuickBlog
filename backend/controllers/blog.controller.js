import fs from "fs";

import imagekit from "../utils/ImageKit.js";
import BlogPost from "../models/BlogPostModel.js";
import { log } from "console";

export const addBlog = async (req, res)=>{
    try {
        const {title, subtitle, content, category} = req.body;
        const author = req.user.id;
        console.log(req.user.username);
        const image = req.file;

        if(!title || !category || !image){
            return res.status(400).json({message: "All fields are required"});
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
                {quality: "auto"},
                {format: "webp"},
                {width: '1280'}
            ],
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT.replace('http://', 'https://')
        })

        const imageUrl= optimizedImageUrl;
        
        const newBlog= await BlogPost.create({
            title,
            subtitle,
            author,
            content,
            image: imageUrl,
            category,
        })
        if(newBlog){
            res.status(201).json({message: "Blog added successfully"})
        }


    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Server Error", error: error.message});
    }
} 

export const getBlogById = async (req, res)=>{
    try {
        const {id}= req.params;
        const blog= await BlogPost.findById(id)
        console.log(blog);
        return res.status(200).json(blog)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

export const getAllBlogs = async (req, res)=>{
    try {
        const blogs = await BlogPost.find();
        return res.status(200).json(blogs);
    } catch (error) {
        log(error.message)
        res.status(500).json({message: "Server Error", error: error.message});
    }
}