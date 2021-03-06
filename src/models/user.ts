import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

interface IUser extends mongoose.Document {
    name : string,
    email:string,
    password: string,
    isAdmin?: boolean,
    tokens?: string[], 
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
    tokens : [{
        type: String,
    }]
},{
    timestamps: true
}).set('toJSON', {virtuals: true});

schema.methods.matchPassword = async function(password:string){
    return await bcrypt.compare(password,this.password)
}

schema.pre<IUser>('save', async function (next){
    if(!this.isModified('password')){ next() }
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model<IUser>('User',schema)

export default User;