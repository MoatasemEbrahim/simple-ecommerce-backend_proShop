import asyncHandler from 'express-async-handler'
import Product from '../../models/product';

// @desc    Fetch all products
// @route    GET /api/products
// @access    Public

const getProducts = asyncHandler((req,res) => {
    const host = req.get('host');
    Product.find().exec((err,products)=>{
        if(!err){
            const productsWithImgURL = products.map(dbProduct => {
                const product = dbProduct.toJSON()
                return {...product, imageURL: `http://${host}${product.imageURL}`}
            })
            return res.json(productsWithImgURL)
        }
        
        res.status(404);
        res.json({
            message: process.env.NODE_ENV !== 'production' ? err.message : 'Something went wrong while getting products',
            stack: process.env.NODE_ENV !== 'production' ? err.stack : null
        })
        
    })
})

export default getProducts;