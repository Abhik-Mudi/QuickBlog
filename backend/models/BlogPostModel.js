import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
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
    },
    contentType: {
        type: String,
        enum: ['rich', 'markdown'],
        default: 'rich'
    },
    isPublished: {
        type: Boolean,
        // required: true,
        default: false
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {timestamps: true});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema)

export default BlogPost;