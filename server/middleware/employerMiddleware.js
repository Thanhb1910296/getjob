import jwt from "jsonwebtoken";
import { Employer } from "../models/employer.js";

const authEmployer = async (request, response, next) => {
    try {
        const token = request.headers['authorization'];
        if (!token)
            return response.status(401).json({ msg: "No auth token, access denied" });

        const verified = jwt.verify(token, "passwordKey");
        if (!verified)
            return response
                .status(401)
                .json({ msg: "Token verification failed, authorization denied." });

        // request.employer = verified.id;
        // request.token = token;
        const decoded = jwt.verify(token, 'passwordKey');
        request.employerId = decoded.employerId;
        console.log(request.employerId)
        next();
    } 
    catch (err) {
        response.status(500).json({ error: err.message });
    }
};

export { authEmployer };