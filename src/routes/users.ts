import express from 'express';
import getUsers from '../controllers/users/getUsers';
import getOneUser from '../controllers/users/getOneUser';
import authenticateUser from '../controllers/users/authenticateUser';
import unauthenticateUser from '../controllers/users/unauthenticateUser';
import getUserProfile from '../controllers/users/getUserProfile';
import updateUserProfile from '../controllers/users/updateUserProfile';
import createUser from '../controllers/users/createUser';
import protect from '../middleware/auth'

const router = express.Router()

router.get('/',getUsers)

router.post('/',createUser)

router.get('/profile',protect,getUserProfile)

router.patch('/profile',protect,updateUserProfile)

router.get('/unauthenticate',protect,unauthenticateUser)

router.get('/:id',getOneUser)

router.post('/authenticate',authenticateUser)


export default router;