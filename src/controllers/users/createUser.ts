import asyncHandler from 'express-async-handler'
import User from '../../models/user';
import usersModel from '../../models/user';
import generateToken from '../../utils/generateToken';
// @desc    create user & get token
// @route    POST /api/users
// @access    Public

const createUser = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body;

    const userExist = await usersModel.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }else{
        const user = await User.create({
            name,email,password
        })

        if(user){
            res.status(201).json({
                id:user._id,
                name,
                email,
                isAdmin:user.isAdmin,
                token:generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
    // .exec(async (err,user)=>{
    //     if(!err){
    //         const isPasswordMatched = await user?.matchPassword(password);
    //         if(user && isPasswordMatched){
    //             const {id,name,isAdmin} = user.toJSON()
    //             res.json({id,name,email,isAdmin,token:generateToken(id)})
    //         }else{
    //             res.status(401);
    //             res.json({
    //                 message: 'Invalid email or password',
    //             })
    //         }
    //     }else{
    //         res.status(404);
    //         res.json({
    //             message: process.env.NODE_ENV !== 'production' ? err.message : 'User not fount',
    //             stack: process.env.NODE_ENV !== 'production' ? err.stack : null
    //         })
    //     }
    // })
})

export default createUser;