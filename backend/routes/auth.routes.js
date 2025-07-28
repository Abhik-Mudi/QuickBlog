import express from "express"
import { login, signup, logout } from "../controllers/auth.controller.js"

const router=express.Router()

// route for signup 
router.post("/signup", signup)

// route for login
router.post("/login", login)

// route for logout
router.post("/logout", logout)

export default router;