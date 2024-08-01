import mongoose, { Schema } from "mongoose";

const reservationSchema = new mongoose.Schema({
    listing_id: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },
    guest_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    check_in_date: {
        type: Date,
        required: true,
    },
    check_out_date: {
        type: Date,
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
    num_of_guests: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export const Reservation = mongoose.model("Reservation", reservationSchema);
