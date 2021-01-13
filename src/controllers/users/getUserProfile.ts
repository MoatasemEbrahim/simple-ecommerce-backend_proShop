import asyncHandler from 'express-async-handler'
import usersModel from '../../models/user';

// @desc     Get user profile
// @route    GET /api/users/profile
// @access   private

const getUserProfile = asyncHandler((req,res) => {
    const user = req.user;
    if(user){
        res.json(user)
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

export default getUserProfile;