import asyncHandler from 'express-async-handler'
import productsModel from '../../models/product';

const getProducts = asyncHandler((req,res) => {
    const host = req.get('host');
    productsModel.find().exec((err,products)=>{
        if(!err){
            const productsWithImgURL = products.map(dbProduct => {
                const product = dbProduct.toJSON()
                return {...product, imageURL: `http://${host}${product.imageURL}`}
            })
            res.json(productsWithImgURL)
        }else{
            throw new Error('Something went wrong while getting products')
        }
    })
})

export default getProducts;