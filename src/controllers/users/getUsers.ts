import asyncHandler from 'express-async-handler'
import User from '../../models/user';

// @desc    Fetch all users
// @route    GET /api/users
// @access    Public

const getUsers = asyncHandler((req,res) => {
    User.find().exec((err,users)=>{
        if(!err){
            res.json(users)
        }else{
            res.status(404);
            res.json({
                message: process.env.NODE_ENV !== 'production' ? err.message : 'Something went wrong while getting users',
                stack: process.env.NODE_ENV !== 'production' ? err.stack : null
            })
        }
    })
})

export default getUsers;