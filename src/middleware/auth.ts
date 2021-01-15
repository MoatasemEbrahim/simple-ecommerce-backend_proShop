import jwt from 'jsonwebtoken';
import User from '../models/user';
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req,res,next)=>{
    const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer') && req.headers.authorization.split(' ')[1] || null
    if(!token){
        res.status(401)
            throw new Error('Not authorized, missing token')
    }else{
        try {
            const decodedToken = jwt.verify(token,process.env.JWT_SECRET as jwt.Secret) as Record<string, string | number>
            const user = await User.findOne({_id:decodedToken?.id,tokens:token}).select('-password')
            if(user){
                req.user = user
                next();
            }else{
                res.status(401)
                throw new Error('Not authorized, token failed')
            }
        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }
})

export default protect;
