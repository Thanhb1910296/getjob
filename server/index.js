//
import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
// const routes = require('./routes');

//
import { PORT, MongoDbUrl } from "./config.js";

//
import userRoute from "./routes/userRoutes.js";
import employerRoute from './routes/employerRoutes.js';
import homeRoute from './routes/homeRoutes.js';
//
const app = express();
// const fileUpload = require('express-fileupload');

//
app.use(express.static('./public'));
// app.use(fileUpload({ useTempFiles: true }));
app.use(express.json());
// app.use(cors(
//     {
//         origin: 'https://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     }
// ));
app.use(cors());
//
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome');
});

// routes(app);
app.use('/user', userRoute);
app.use('/employer', employerRoute);
app.use('/home', homeRoute);


mongoose.connect(MongoDbUrl)
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });