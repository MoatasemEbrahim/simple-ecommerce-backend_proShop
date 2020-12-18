import asyncHandler from 'express-async-handler'
import productsModel from '../../models/product';

const getProducts = asyncHandler((req,res) => {
    const host = req.get('host');
    productsModel.findById(req.params.id).exec((err,dbProduct)=>{
        if(!err){
            const product = dbProduct?.toJSON()
            const productWithImgURL = {...product,imageURL: `http://${host}${product.imageURL}`}
            res.json(productWithImgURL)
        }else{
            throw new Error('Product not fount')
        }
    })
})

export default getProducts;