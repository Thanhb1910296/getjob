import jwt from "jsonwebtoken";

const authMiddleware = (request, response) => {
    const token = request.headers.token.split(' ')[1]
    jwt.verify(token, 'access_token', function (err) {
        if (err) {
            return response.status(404).json({
                message: 'The authemtication',
                status: 'Error'
            })
        }
        else {
            return response.status(404).json({
                message: 'The authemtication',
                status: 'Error'
            })
        }
    });
}

const authUserMiddleware = (request, response, next) => {
    const token = request.headers.token.split(' ')[1]
    const userId = request.params.id
    jwt.verify(token, 'access_token', function (err, user) {
        if (err) {
            return response.status(404).json({
                message: 'The authemtication',
                status: 'Error'
            })
        }
        if (user?.id === userId) {
            next()
        } else {
            return response.status(404).json({
                message: 'The authemtication',
                status: 'Error'
            })
        }
    });
}

export {authMiddleware, authUserMiddleware};