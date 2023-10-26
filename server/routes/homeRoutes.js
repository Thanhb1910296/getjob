//
import express from 'express';

import { Recruiment } from '../models/recruitment.js'

const homeRouter = express.Router();

homeRouter.get('/', async (request, response) => {
    try {
        const recruitments = await Recruiment.find({});

        return response.status(200).json({
            count: recruitments.length,
            data: recruitments,
        });
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default homeRouter;