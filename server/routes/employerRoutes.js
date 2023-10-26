//
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//
import { Employer } from "../models/employer.js";
import { Company } from "../models/company.js";
import { Recruiment } from '../models/recruitment.js';
//
// import {loginEmployer} from '../service/EmployerServices.js';
import { authEmployer } from '../middleware/employerMiddleware.js';
//
const employerRouter = express.Router();

//
employerRouter.post('/register', async (request, response) => {
    try {
        if(
            !request.body.fullname ||
            !request.body.email ||
            !request.body.password
        ){
            return response.status(400).send({
                message: 'Send all required fields',
            }); 
        }
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(request.body.email);

        if(!isCheckEmail) {
            return response.status(400).send({
                message: 'The input must be a valid email address',
            }); 
        };

        if(request.body.confirmpassword != request.body.password){
            return response.status(400).send({
                message: 'Passwords do not match',
            }); 
        };

        const {fullname, email, password, phonenumber, sex, companyname, role, workaddress} = request.body;

        const hash = bcrypt.hashSync(password, 10);

        const newEmployer = {
            fullname: fullname,
            email: email,
            password: hash, 
            phonenumber: phonenumber,
            sex: sex,
            company: companyname,
            role: role,
            workaddress: workaddress,
        };

        const employer = await Employer.create(newEmployer);
        console.log(employer);

        const newCompany = {
            employerId: employer._id,
            name: companyname
        };
        
        const company = await Company.create(newCompany);
        console.log(company);

        return response.status(201).send(
            {
                employer: employer,
                company: company,
            }
        );
    }
    catch(error) {
        console.log(error);
        response.status(400).send({message: error.message});
    }
});

employerRouter.post('/login', async (request, response) => {
    try {
        if(
            !request.body.email ||
            !request.body.password
        ){
            return response.status(400).send({
                message: 'Send all required fields',
            }); 
        }

        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(request.body.email);

        if(!isCheckEmail) {
            return response.status(400).send({
                message: 'The input must be a valid email address',
            }); 
        };
        
        const { email, password } = request.body;

        const employer = await Employer.findOne({ email });
        if(!employer) {
            // res.json({ msg: "Account does not exist!" });
            console.log("Account does not exist!");
            return response.status(400).send({message: 'Account does not exist!'});
        }

        const isMatch = await bcrypt.compare(password, employer.password);
        if(!isMatch) {
            return response.status(400).send({message: 'Wrong password!'});
        }
        
        console.log(employer);
        const token = jwt.sign({ employerId: employer._id }, "passwordKey", {expiresIn: "1h"});
        // response.cookie("token", token, {
        //     httpOnly: true,
        // })
        employer.refreshtoken = token;
        await employer.save();
        return response.status(200).json({ token, ...employer._doc });
    }
    catch(error) {
        console.log(error);
        response.status(400).send({message: error.message});
    }
});

// employerRouter.post("/tokenIsValid", async (request, response) => {
//     try {
//         const token = request.header("x-auth-token");
//         if (!token)
//                 return response.json(false);

//         const verified = jwt.verify(token, "passwordKey");
//         if (!verified) 
//                 return response.json(false);
    
//         const employer = await Employer.findById(verified.id);
//         if (!employer) return response.json(false);
//             response.json(true);

//     } catch (e) {
//         response.status(500).json({ error: e.message });
//     }
// });

employerRouter.post("/publish", authEmployer, async (request, response) => {
    try {
        const employerId = request.employerId;
        const employer = await Employer.findOne({_id:employerId});        
        console.log(employer);

        const name = employer.companyname;
        //console.log(name);

        const company = await Company.findOne({name});
        const companyId = company.id;
        console.log(companyId);
        const {
            title,
            role,
            skills,
            quantity,
            type,
            workform,
            experience,
            workaddress,
            sex,
            currency,
            salary,
            description,
            require,
            applicationdeadline,
        } = request.body;
        

        const newRecruiment = {
            employerId: employerId,
            companyId: companyId,
            title: title,
            role: role,
            skills: skills,
            quantity: quantity,
            type: type,
            workform: workform,
            experience: experience,
            workaddress: workaddress,
            sex: sex,
            currency: currency,
            salary: salary,
            description: description,
            require: require,
            applicationdeadline: applicationdeadline,
        };

        const recruitment = await Recruiment.create(newRecruiment);
        console.log(newRecruiment);

        return response.status(201).send(recruitment);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

employerRouter.get('/', async (request, response) => {
    try {
        const employers = await Employer.find({});
  
        return response.status(200).json({
            count: employers.length,
            data: employers,
        });
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

employerRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const employer = await Employer.findById(id);

        return response.status(200).json(employer);
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    };
});

export default employerRouter;