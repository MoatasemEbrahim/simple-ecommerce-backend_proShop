import asyncHandler from 'express-async-handler'

// @desc     Get user profile
// @route    GET /api/users/profile
// @access   private

const getUserProfile = asyncHandler((req,res) => {
    const user = req.user;
    if(user){
        const userData = user?.toJSON();
        delete userData.tokens;
        res.json(userData)
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

export default getUserProfile;