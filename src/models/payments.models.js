import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
    
},{timestamps:true});
export const Payments = mongoose.model("Payments",paymentSchema)
