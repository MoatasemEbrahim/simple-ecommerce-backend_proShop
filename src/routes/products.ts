import express from 'express';
import getProducts from '../controllers/products/getProducts';
import getOneProduct from '../controllers/products/getOneProduct';

const router = express.Router()

router.get('/',getProducts)

router.get('/:id',getOneProduct)

export default router;