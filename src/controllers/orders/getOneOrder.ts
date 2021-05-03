import asyncHandler from 'express-async-handler'
import Order from '../../models/order';

// @desc     Get Order by id
// @route    GET /api/orders/:id
// @access   Private

const getOneOrder = asyncHandler((req,res) => {
    Order.findById(req.params.id).populate('user','name email').exec((err,order)=>{
        if(!err){
            res.json(order)
        }else{
            res.status(404);
            res.json({
                message: process.env.NODE_ENV !== 'production' ? err.message : 'Order not fount',
                stack: process.env.NODE_ENV !== 'production' ? err.stack : null
            })
        }
    })
})

export default getOneOrder;