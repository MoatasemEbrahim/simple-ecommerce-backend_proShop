import mongoose from 'mongoose';

const connectDB = async ():Promise<void> =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI||'',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log('MongoDB connected: ',connection.connection.host)
    } catch (error) {
        console.log('error',error.message)
        process.exit(1)
    }
}

export default connectDB;