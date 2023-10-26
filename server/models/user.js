import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        fullname: {
            // required: true,
            type: String,
            trim: true,
        },
        email: {
            required: true,
            type: String,
            trim: true,
            // validate: {
            // validator: (value) => {
            //     const re =
            //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            //     return value.match(re);
            // },
            // message: "Please enter a valid email address",
            // },
        },
        password: {
            required: true,
            type: String,
        },
        // confirmpassword: {
        //     type: String,
        // },
        jobposition: {
            type: String,
            default: "",
        },
        yoe: {
            type: Number,
            default: 0,
        },
        image: {
            type: String,
            default: "",
        },
        birthday: {
            type: String,
            default: "1/1/2000",
        },
        sex: {
            type: String,
            default: "N/A",
        },
        phonenumber: {
            type: Number,
            default: 0,
        },
        address: {
            type: String,
            default: "",
        },
        socialnetwork: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "user",
        },
        token: {
            type: String,
            default: ""
        }
        // cv: {
        //     type: String,
        //     default: "",
        // },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);

// MongoDB stores dates as 64-bit integers, which means that Mongoose does not store timezone information by default. 
// When you call Date#toString(), the JavaScript runtime will use your OS' timezone.
// Date -> String 