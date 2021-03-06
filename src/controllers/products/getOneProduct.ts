import asyncHandler from 'express-async-handler'
import Product from '../../models/product';

// @desc    Fetch single product
// @route    GET /api/products/:id
// @access    Public

const getOneProduct = asyncHandler((req,res) => {
    const host = req.get('host');
    Product.findById(req.params.id).exec((err,dbProduct)=>{
        if(!err){
            const product = dbProduct?.toJSON()
            const productWithImgURL = {...product,imageURL: `http://${host}${product.imageURL}`}
            res.json(productWithImgURL)
        }else{
            res.status(404);
            res.json({
                message: process.env.NODE_ENV !== 'production' ? err.message : 'Product not fount',
                stack: process.env.NODE_ENV !== 'production' ? err.stack : null
            })
        }
    })
})

export default getOneProduct;