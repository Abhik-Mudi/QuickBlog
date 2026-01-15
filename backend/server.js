import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import blogRouter from "./routes/blog.routes.js";
import commentRouter from "./routes/comment.routes.js";

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Blog API' });
});

app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/comments", commentRouter);

app.listen(PORT, ()=>{
    dbConnect();
    console.log(`Server is running on port ${PORT}`);
})