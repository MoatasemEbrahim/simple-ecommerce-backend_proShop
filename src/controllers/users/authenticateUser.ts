import asyncHandler from 'express-async-handler'
import usersModel from '../../models/user';
import generateToken from '../../utils/generateToken';
// @desc    Auth user & get token
// @route    POST /api/users/authenticate
// @access    Public

const authenticateUser = asyncHandler((req,res) => {
    const {email,password} = req.body;

    usersModel.findOne({email}).exec(async (err,user)=>{
        if(!err){
            const isPasswordMatched = await user?.matchPassword(password);
            if(user && isPasswordMatched){
                const {id,name,isAdmin} = user.toJSON()
                res.json({id,name,email,isAdmin,token:generateToken(id)})
            }else{
                res.status(401);
                res.json({
                    message: 'Invalid email or password',
                })
            }
        }else{
            res.status(404);
            res.json({
                message: process.env.NODE_ENV !== 'production' ? err.message : 'User not fount',
                stack: process.env.NODE_ENV !== 'production' ? err.stack : null
            })
        }
    })
})

export default authenticateUser;