import mongoose from 'mongoose';
import Blog from '../../frontend/src/pages/Blog';

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
    }
}, {timestamps: true});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema)

export default BlogPost;