import asyncHandler from 'express-async-handler'
import Order from '../../models/order';

// @desc     Get Order by id
// @route    GET /api/orders/:id
// @access   Private

/**
* @openapi
* tags:
* - name: "Orders"
*   description: "Everything about Orders"
*/

/**
* @openapi
* /orders/{orderId}:
*   get:
*    summary: "Get one order"
*    description: ""
*    operationId: "getOrder"
*    consumes:
*    - "application/json"
*    tags:
*    - "Orders"
*    parameters:
*    - name: "orderId"
*      in: "path"
*      description: "Order id"
*      required: true
*      type: "string"
*    responses:
*     200:
*      description: "Object with the Order data"
*     404:
*      description: "Order not found"
*/

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