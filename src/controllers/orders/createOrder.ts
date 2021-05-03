import asyncHandler from 'express-async-handler'
import Order from '../../models/order';

// @desc     Create Order
// @route    POST /api/orders
// @access   Private

const createOrder = asyncHandler(async(req,res) => {
    const {items,itemsPrice,taxPrice,shippingPrice,paymentMethod,shippingAddress} = req.body

    const totalPrice = parseFloat(itemsPrice) + parseFloat(shippingPrice) + parseFloat(taxPrice);
    
    if(items && items.length > 0){
        const order = new Order({
            items,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paymentMethod,
            shippingAddress,
            user:req.user?._id
        })

        const createdOrder = await order.save();
        res.status(201).json(createdOrder)
    }else{
        res.status(400);
        throw new Error('No order items')
    }
})

export default createOrder;