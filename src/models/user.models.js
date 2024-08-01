import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:password,
        required:[true,"Password is required"]
   },
   
    phoneNumber:{
        type:Number,
        required:true
   },
   
    address:{
        type:String,
        required:true
   },
   

},{timestamps:true})
export const User = mongoose.model("User",userSchema) 