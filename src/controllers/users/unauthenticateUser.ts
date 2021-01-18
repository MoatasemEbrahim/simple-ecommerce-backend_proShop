import asyncHandler from 'express-async-handler'

// @desc     Unauthenticate user
// @route    GET /api/users/unauthenticate
// @access   private

const unauthenticateUser = asyncHandler((req,res) => {
    const token = req.token;
    const user = req.user;
    if(user && user.tokens.includes(token)){
        user.tokens = user.tokens.filter((userToken:string) => userToken !== token)
        user.save()
        res.json({loggedOut:true})
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

export default unauthenticateUser;