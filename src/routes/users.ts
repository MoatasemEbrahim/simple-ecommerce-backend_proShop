import express from 'express';
import UsersController from '../controllers/users'
import protect from '../middleware/auth'

const router = express.Router()

router.get('/',protect,UsersController.getUsers)

router.post('/',UsersController.createUser)

router.get('/profile',protect,UsersController.getUserProfile)

router.patch('/profile',protect,UsersController.updateUserProfile)

router.get('/unauthenticate',protect,UsersController.unauthenticateUser)

router.get('/:id',protect,UsersController.getOneUser)

router.post('/authenticate',UsersController.authenticateUser)


export default router;
