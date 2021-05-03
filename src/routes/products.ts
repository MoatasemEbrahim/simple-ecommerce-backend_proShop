import express from 'express';
import ProductsController from '../controllers/products';

const router = express.Router()

router.get('/',ProductsController.getProducts)

router.get('/:id',ProductsController.getOneProduct)

export default router;
