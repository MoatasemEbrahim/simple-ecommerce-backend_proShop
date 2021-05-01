import asyncHandler from 'express-async-handler'
import User from '../../models/user';

// @desc    Fetch single user
// @route    GET /api/users/:id
// @access    Public

const getOneUser = asyncHandler((req,res) => {
    User.findById(req.params.id).exec((err,user)=>{
        if(!err){
            res.json(user)
        }else{
            res.status(404);
            res.json({
                message: process.env.NODE_ENV !== 'production' ? err.message : 'User not fount',
                stack: process.env.NODE_ENV !== 'production' ? err.stack : null
            })
        }
    })
})

export default getOneUser;