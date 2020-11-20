import mongoose from 'mongoose';


const reviewsSchema = mongoose.Schema({
    required: false,
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
},{timestamps:true})

const schema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name : {
        type: String,
        required: true,
        unique: true
    },
    img : {
        type: String,
    },
    brand : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    reviews: [reviewsSchema],
    rating : {
        type: Number,
        required: true,
        default: 0
    },
    numReviews : {
        type: Number,
        required: true,
        default: 0
    },
    price : {
        type: Number,
        required: true,
        default: 0
    },
    countInStock : {
        type: Number,
        required: true,
        default: 0
    },
},{
    timestamps: true
})


const Product = mongoose.model('Product',schema)

export default Product;