import bcrypt from "bcrypt"
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String ,
    avatar : String , 
    time : {
        type : Date,
        default : Date.now
    }
 
})

const User = mongoose.model("user",userSchema)


const register = async (req , res) => {

    try{
 
    const password = req.body.password

    const hashedPassword = await bcrypt.hash(password , 10);
 
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        password :  hashedPassword
    })

   user.save()

   res.status(201).json({message : "User created successfully !"})

    }catch(err){
        console.log(err)
        res.status(500).json({message : "Failed to create user!"})
    }

}

export default register
