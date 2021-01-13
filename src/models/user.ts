import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

export interface UserDoc extends mongoose.Document {
    name : string,
    email:string,
    password: string,
    isAdmin?: boolean,
    matchPassword: (password:string)=>Promise<boolean>
}

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    email : {
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

schema.methods.matchPassword = async function(password:string){
    return await bcrypt.compare(password,this.password)
}

schema.pre<UserDoc>('save', async function (next){
    if(!this.isModified('password')){ next() }
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model<UserDoc>('User',schema)

export default User;