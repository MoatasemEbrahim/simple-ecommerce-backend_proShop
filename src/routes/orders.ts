import express from 'express';
import protect from '../middleware/auth'
import updateOrderToPaid from '../controllers/orders/updateOrderToPaid';
import createOrder from '../controllers/orders/createOrder';
import getOneOrder from '../controllers/orders/getOneOrder';
import getUserOrders from '../controllers/orders/getUserOrders'
const router = express.Router()

router.post('/',protect,createOrder)

router.get('/myOrders',protect,getUserOrders)

router.post('/:id/pay',protect,updateOrderToPaid)

router.get('/:id',protect,getOneOrder)

export default router;
