import { User } from "../models/user.js";
import { genneralAccessToken, genneralRefreshToken } from './jwtServices.js'
import bcrypt from "bcrypt";

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'  
                })
            }

            const comparePassword = bcrypt.compareSync(password, checkUser.password);
            if (!comparePassword) {
                resolve({
                    status: 'Err',
                    message: 'The password or user is incorrect'
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
            })

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            })
        } catch (e) {
            reject(e)
        }
        
    })
}

export {loginUser};