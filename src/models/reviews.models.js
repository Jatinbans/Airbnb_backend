import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviewer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
