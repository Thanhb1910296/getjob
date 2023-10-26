import mongoose from "mongoose";
import { Recruitment } from "./recruitment"; 

const applySchema = mongoose.Schema(
    {
        userId: {
            type: String,
        },
        cv: {
            type: String,
            default: "",
        },
        coverletter: {
            type: String,
        },
        recruitment: [ Recruitment ]
    },
    {
        timestamps: true,
    }
);

export const Apply = mongoose.model('Apply', applySchema);