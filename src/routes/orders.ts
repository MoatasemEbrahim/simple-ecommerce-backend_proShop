import express from 'express';
import protect from '../middleware/auth'
import OrdersController from '../controllers/orders';

const router = express.Router()

router.post('/',protect,OrdersController.createOrder)

router.get('/myOrders',protect,OrdersController.getUserOrders)

router.post('/:id/pay',protect,OrdersController.updateOrderToPaid)

router.get('/:id',protect,OrdersController.getOneOrder)

export default router;

