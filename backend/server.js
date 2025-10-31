import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import authRouter from "./routes/auth.routes.js";
import blogRouter from "./routes/blog.routes.js";
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);

app.listen(PORT, ()=>{
    dbConnect();
    console.log(`Server is running on port ${PORT}`);
})