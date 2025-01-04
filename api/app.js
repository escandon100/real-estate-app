import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/authRoute.js"
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true });


const app = express()

app.use(express.json())


app.use("/api/auth" , authRoute)

app.listen(3000 , ()=> {
    console.log("server is running at port 3000")
})