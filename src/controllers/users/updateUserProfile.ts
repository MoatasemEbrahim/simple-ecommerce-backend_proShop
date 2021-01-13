import asyncHandler from 'express-async-handler'
import generateToken from '../../utils/generateToken';

// @desc     Update user profile
// @route    Patch /api/users/profile
// @access   private

const updateUserProfile = asyncHandler(async(req,res) => {
    const user = req.user;
    if(user){
        const {name:newName,email:newEmail,password:newPassword} = req.body
        user.name = newName || user.name
        user.email = newEmail || user.email
        if(newPassword){
            user.password = newPassword;
        }

        const updatedUser = await user.save()

        const {id,name,email,isAdmin} = updatedUser.toJSON()
        res.json({id,name,email,isAdmin,token:generateToken(id)})

    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

export default updateUserProfile;