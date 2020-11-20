import express from 'express';
import asyncHandler from 'express-async-handler'
import productsModel from '../models/product';

const router = express.Router()

// @desc    Fetch all products
// @route    GET /api/products
// @access    Public
router.get('/'
    ,asyncHandler(async(_,res) => {
        const products = await productsModel.find()
        res.json(products)
    })
)

// @desc    Fetch single product
// @route    GET /api/products/:id
// @access    Public
router.get('/:id'
    ,asyncHandler(async (req,res,) => {
        const product = await productsModel.findById(req.params.id)
        if(product){
            res.json(product)
        }else{
            throw new Error('Product not fount')
        }

    })
)

export default router;