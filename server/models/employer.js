import mongoose from 'mongoose';

import { Recruiment } from './recruitment.js'

const employerSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        password: {
            type: String,
            default: "",
        },
        phonenumber: {
            type: Number,
            default: "",
        },
        sex: {
            type: String,
            default: "N/A",
        },
        companyname: {
            type: String,
            default: "",
        },
        role: {
            type: String,
            default: "Staff",
        },
        workaddress: {
            type: String,
            default: "",
        },
        refreshtoken: {
            type: String,
            default: ""
        }
    }
);

export const Employer = mongoose.model('Employer', employerSchema);