import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/authRoute.js"

mongoose.connect("mongodb+srv://Olakunle:Escandon100_jnr@cluster0.c9taw.mongodb.net/UserDB?retryWrites=true&w=majority&appName=Cluster0")

const app = express()

app.use(express.json())


app.use("/api/auth" , authRoute)






app.listen(3000 , ()=> {
    console.log("server is running at port 3000")
})