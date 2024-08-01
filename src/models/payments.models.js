import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ["credit_card", "debit_card", "paypal", "bank_transfer"],
    },
    paymentDate: {
        type: Date,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });

export const Payments = mongoose.model("Payments", paymentSchema);
