import mongoose from "mongoose";

const recruimentSchema = mongoose.Schema(
    {
        employerId: { 
            type: String
        },
        companyId: {
            type: String
        },
        title: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            default: "Staff",
        },
        skills: [
            {
                type: String,
                default: ""
            },
        ],
        quantity: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "Full time"
        },
        workform: {
            type: String,
            default: "At office"
        },
        experience: {
            type: String,
            default: "No experience"
        },
        workaddress: {
            type: String,
            default: ""
        },
        sex: {
            type: String,
            default: "N/A"
        },
        currency: {
            type: String,
            default: "VND"
        },
        salary: {
            type: String,
            default: "Negotiable"
        },
        description: {
            type: String,
            default: ""
        },
        require: {
            type: String,
            default: ""
        },
        applicationdeadline: {
            type: String,
            default: ""
        },
    },
    {
        timestamps: true,
    }
);

export const Recruiment = mongoose.model('Recruiment', recruimentSchema);
// export default recruimentSchema;