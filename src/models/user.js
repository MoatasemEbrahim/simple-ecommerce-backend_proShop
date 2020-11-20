import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    isAdmin : {
        type: Boolean,
        required: true,
        default: false
    },
},{
    timestamps: true
}).set('toJSON', {virtuals: true});


const User = mongoose.model('User',schema)

export default User;