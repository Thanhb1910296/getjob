//
import express from 'express';
import bcrypt from 'bcrypt';
//
import { User } from "../models/user.js";

//
import {loginUser} from '../service/userServices.js';
import refreshTokenJwtService from "../service/jwtServices.js"
//
const userRouter = express.Router();

//
userRouter.post('/register', async (request, response) => {
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

        const {fullname, email, password} = request.body;

        const hash = bcrypt.hashSync(password, 10);

        const newUser = {
            fullname: fullname,
            email: email,
            password: hash,
        };

        const user = await User.create(newUser);
        console.log(user);
        return response.status(201).send(user);
    }
    catch(error) {
        console.log(error);
        response.status(400).send({message: error.message});
    }
});

userRouter.post('/login', async (request, response) => {
    try {
        if(
            // !request.body.fullname ||
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

        const user = await User.findOne({ email });
        
        if(!user) {
            // res.json({ msg: "Account does not exist!" });
            console.log("Account does not exist!");
            return response.status(400).send({message: 'Account does not exist!'});
        }
    
        // const isMatch = await bcryptjs.compare(password, user.password);

        // if(password != user.password) {
        //     // res.json({ msg: "Your password is invalid. Please try again." });
        //     console.log("Your password is invalid. Please try again.");
        //     return response.status(400).send({message: 'Wrong password!'});
        // } 

        console.log(user);
            
        // const token = jwt.sign({ id: user._id }, "mysecretkey");
        // // req.session.token = token;
        // res.cookie('token', token, { httpOnly: true });
        // console.log(token, res.cookies);
        const resp = await loginUser(request.body);
        const { refresh_token, ...newReponse } = resp
        response.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            path: '/',
        })
        return response.status(200).json({...newReponse, refresh_token})

    }
    catch(error) {
        console.log(error);
        response.status(400).send({message: error.message});
    }
});

userRouter.get('/', async (request, response) => {
    try {
        const users = await User.find({});
  
        return response.status(200).json({
            count: users.length,
            data: users,
        });
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


userRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findById(id);
        
        return response.status(200).json(user)
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    };
});

userRouter.put('/update/:id', async (request, response) => {
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

        const { id } = request.params;

        const result = await User.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({ message: 'User not found' });
        }
        return response.status(200).send({ message: 'User updated successfully' });
    }
    catch(error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

// userRouter.post('/refresh-token', async (req, res) => {
//     try {
//         let token = req.headers.token.split(' ')[1]
//         if (!token) {
//             return res.status(400).json({
//                 status: 'ERR',
//                 message: 'The token is required'
//             })
//         }
//         const response = await refreshTokenJwtService(token);
//         return res.status(200).json(response);
//     } catch (e) {
//         return res.status(404).json({
//             message: e
//         })
//     }
// });

export default userRouter;