import BlogPost from "../models/BlogPostModel.js";
import Comment from "../models/CommentModel.js";

export const getComments = async (req, res)=>{
    try {
        const {id} = req.params;
        const comments = await Comment.find({post: id}).populate("author", "username").populate("post", "comments")
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const getAllComments = async(req, res)=>{
    try {
        const comments=await Comment.find().populate("author", "username");
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error:error.message})
    }
}

export const addComment = async(req, res)=>{
    try {
        const {content} =req.body;
        const author = req.user.id;
        const post = req.params.id;
        const comment = await Comment.create({
            content,
            author,
            post
        })

        const blog= await BlogPost.findById(post);
        if(!blog){
            return res.status(404).json({success: false, message: "Blog not found"})
        }
        blog.comments.push(comment._id)
        await blog.save();

        if(comment){
            res.status(201).json({success: true, message: "Comment added successfully", data: comment})
        }
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error", error: error.message });
    }
}

export const getAllCommentsByUser=async (req, res)=>{
    try {
        console.log(req.user);
        const blog=await Comment.find({author: req.user.id}).populate("post", "title");
        if(!blog){
            return res.status(404).json({message: "Blog not found"});
        }
        return res.status(200).json(blog)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}