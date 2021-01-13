import express from 'express';
import getUsers from '../controllers/users/getUsers';
import getOneUser from '../controllers/users/getOneUser';
import authenticateUser from '../controllers/users/authenticateUser';
import getUserProfile from '../controllers/users/getUserProfile';
import createUser from '../controllers/users/createUser';
import protect from '../middleware/auth'

const router = express.Router()

router.get('/',getUsers)

router.post('/',createUser)

router.get('/profile',protect,getUserProfile)

router.get('/:id',getOneUser)

router.post('/authenticate',authenticateUser)

export default router;