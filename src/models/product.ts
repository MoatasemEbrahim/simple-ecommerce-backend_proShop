import mongoose from 'mongoose';


const reviewsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
},{
    timestamps:true
}).set('toJSON', {virtuals: true});

const schema = new mongoose.Schema({
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
    image : {
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
    }
},{
    timestamps: true,
}).set('toJSON', {virtuals: true})

schema.virtual('imageURL').get(function(this:any) { return `/public/images/${this.image}`; })

const Product = mongoose.model('Product',schema)

export default Product;