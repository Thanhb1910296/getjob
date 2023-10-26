import jwt from 'jsonwebtoken';

const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, 'access_token', { expiresIn: '30s' })

    return access_token
}

const genneralRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        ...payload
    }, 'refresh_token', { expiresIn: '365d' })

    return refresh_token
}

const refreshTokenJwtService = (token) => {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, 'access_token', async (err, user) => {
                if (err) {
                    resolve({
                        status: 'Err',
                        message: 'The authemtication'
                    })
                }
                const access_token = await genneralAccessToken({
                    id: user?.id,
                })
                resolve({
                    status: 'Ok',
                    message: 'Success',
                    access_token
                })
            })
        } catch (e) {
            reject(e)
        }
    })
}
export { genneralAccessToken, genneralRefreshToken};
export default refreshTokenJwtService;