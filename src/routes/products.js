import express from 'express';
import getProducts from '../controllers/products/getProducts';
import getOneProduct from '../controllers/products/getOneProduct';

const router = express.Router()

// @desc    Fetch all products
// @route    GET /api/products
// @access    Public
router.get('/',getProducts)

// @desc    Fetch single product
// @route    GET /api/products/:id
// @access    Public
router.get('/:id',getOneProduct)

export default router;