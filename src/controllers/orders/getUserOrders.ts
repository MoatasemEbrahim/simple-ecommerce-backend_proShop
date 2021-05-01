import asyncHandler from 'express-async-handler'
import Order from '../../models/order';

// @desc     Get USer Orders
// @route    GET /api/orders/myOrders
// @access   Private

const getUSerOrders = asyncHandler((req,res) => {
    Order.find({user:req?.user?._id}).exec((err,orders)=>{
        if(!err){
            res.json(orders)
        }else{
            res.status(404);
            res.json({
                message: process.env.NODE_ENV !== 'production' ? err.message : 'Something went wrong',
                stack: process.env.NODE_ENV !== 'production' ? err.stack : null
            })
        }
    })
})

export default getUSerOrders;