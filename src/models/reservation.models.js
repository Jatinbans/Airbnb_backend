import mongoose, { Schema } from "mongoose";
const reservationSchema = new mongoose.Schema({
    
},{timestamps:true})
export const Reservation = mongoose.model("Reservation",reservationSchema)