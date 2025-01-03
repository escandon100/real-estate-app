import express from "express"
import postRoute from "./routes/postRoute.js"
import authRoute from "./routes/authRoute.js"

const app = express()

app.use("/api/test" , (req , res) => {
    res.send("it works")
})

app.use("/api/post" , postRoute)

app.use("/api/auth" , authRoute)

app.listen(3000 , ()=> {
    console.log("server is running at port 3000")
})