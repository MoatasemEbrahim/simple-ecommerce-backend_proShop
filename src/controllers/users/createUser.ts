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
            const token = generateToken(user._id)
            user.tokens = [token]
            user.save()
            res.status(201).json({
                id:user._id,
                name,
                email,
                isAdmin:user.isAdmin,
                token
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
})

export default createUser;