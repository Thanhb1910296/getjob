import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        userId: {
            type: String,
        },
        starrate: {
            type: Number,
        },
        comment: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Reviews = reviewSchema;