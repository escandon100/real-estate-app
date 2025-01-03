import express from "express"
import {register , login , logout} from "../controllers/authControllers.js"

const router = express.Router()

router.get("/register" , register);
router.post("/login" , login );
router.post("/logout" , logout);

export default router
