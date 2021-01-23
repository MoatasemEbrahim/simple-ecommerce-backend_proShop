import express from 'express';
import protect from '../middleware/auth'
import createOrder from '../controllers/orders/createOrder';
const router = express.Router()

router.post('/',protect,createOrder)

export default router;
