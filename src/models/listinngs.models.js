import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    host_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    price_per_night: {
        type: Number,
        required: true,
    },
    max_guests: {
        type: Number,
        required: true,
    },
    num_bedrooms: {
        type: Number,
        required: true,
    },
    num_bathrooms: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    }
}, { timestamps: true });

export const Listings = mongoose.model("Listings", listingSchema);
