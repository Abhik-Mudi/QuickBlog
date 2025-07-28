import express from "express"
import dotenv from "dotenv"

import authRouter from "./routes/auth.routes.js";
import dbConnect from "./db/dbConnect.js";

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
// app.use("/api/blogs", blogRouter);

app.listen(PORT, ()=>{
    dbConnect();
    console.log(`Server is running on port ${PORT}`);
})