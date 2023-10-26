import mongoose from "mongoose";
import { Review } from "./review.js";

const companySchema = mongoose.Schema(
    {
        employerId: { 
            type: String
        },
        name: {
            type: String,
            default: ""
        },
        image: [
            {
                type: String,
                default: ""
            }
        ],
        location: [
            {
                type: String,
                default: ""
            },
        ],
        website: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "Product"
        },
        size: {
            type: String,
            default: "1-50"
        },
        workingdays: {
            type: String,
            default: "Monday - Friday"
        },
        overtimepolicy: {
            type: String,
            default: "No OT"
        },
        overview: {
            type: String,
            default: ""
        },
        policy: {
            type: String,
            default: ""
        },
        review: [ Review ]
    }
);

export const Company = mongoose.model('Company', companySchema);