import asyncHandler from 'express-async-handler'
import Order from '../../models/order';

// @desc     Update Order To Paid
// @route    PATCH /api/orders/:id/pay
// @access   Private

const updateOrderToPaid = asyncHandler(async(req,res) => {
    const {paymentResult} = req.body;
    console.log(paymentResult)
    const order = await Order.findById(req.params.id)
    if(order && paymentResult){
        order.isPaid = true;
        order.paidAt = new Date();
        order.paymentResult = paymentResult
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    }else{
        res.status(400);
        throw new Error('Order not found')
    }
})

export default updateOrderToPaid;