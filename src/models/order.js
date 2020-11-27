import mongoose from 'mongoose';

const schema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    items : [
        {
            name: {type: String, required: true},
            quantity: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
        }
    ],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: Number, required: true},
        country: {type: String, required: true},
    },
    paymentMethod: {type: String, required: true},
    paymentResult: {
        id: {type: String, required: true},
        status: {type: String, required: true},
        updateTime: {type: String, required: true},
        email: {type: String},
    },
    taxPrice: {type: Number, required: true,default: 0.0},
    shippingPrice: {type: Number, required: true,default: 0.0},
    totalPrice: {type: Number, required: true,default: 0.0},
    isPaid: {type: Boolean, required: true, default:false},
    paidAt: {type:Date},
    isDelivered: {type: Boolean, required: true, default:false},
    deliveredAt: {type:Date},

},{
    timestamps: true
}).set('toJSON', {virtuals: true});


const Order = mongoose.model('Order',schema)

export default Order;