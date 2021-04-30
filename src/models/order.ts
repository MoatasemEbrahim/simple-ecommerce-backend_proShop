import mongoose from 'mongoose';

const schema = new  mongoose.Schema({
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
        type:{
            address: {type: String, required: true},
            city: {type: String, required: true},
            postalCode: {type: Number, required: true},
            country: {type: String, required: true},
        },
        required:true
    },
    paymentMethod: {type: String, required: true},
    paymentResult: {
        type :{
            id: {type: String, required: true},
            status: {type: String, required: true},
            updateTime: {type: Date, required: true},
            email: {type: String},
        },
        required: false
    },
    itemsPrice: {type: Number, required: true,default: 0.0},
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

interface IProduct {
    name: string,
    quantity: number,
    image: string,
    price: number,
    product: string,
}

interface IShippingAddress {
    address: string,
    city: string,
    postalCode: string,
    country: string,
}

interface IPaymentResult {
    id: string,
    status: string,
    updateTime: Date,
    email: string,
}
interface IOrder extends mongoose.Document {
    user : string,
    items:IProduct[],
    shippingAddress: IShippingAddress,
    paymentResult?: IPaymentResult,
    paymentMethod: string, 
    itemsPrice: number,
    taxPrice: number,
    shippingPrice: number,
    totalPrice: number,
    isPaid: boolean,
    paidAt?: Date,
    isDelivered: boolean,
    deliveredAt?: Date,
}

const Order = mongoose.model<IOrder>('Order',schema)

export default Order;