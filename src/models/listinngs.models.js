import mongoose from "mongoose";
const listingSchema = new mongoose.Schema({


},{timestamps:true});
export const Listings = mongoose.model("Listings",listingSchema)

