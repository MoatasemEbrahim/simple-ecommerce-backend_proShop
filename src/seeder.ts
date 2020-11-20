import dotenv from 'dotenv';
import products from './data/products';
import users from './data/users';
import User from './models/user';
import Product from './models/product';
import Order from './models/order';
import connectDB from './config/db';

dotenv.config()

connectDB()

const importData = async ():Promise<void> => {
    try {
        await Order.deleteMany({});
        await Product.deleteMany({});
        await User.deleteMany({});

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => ({...product,user: adminUser}))
        await Product.insertMany(sampleProducts);
        console.log('seeder is done successfully')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

importData()