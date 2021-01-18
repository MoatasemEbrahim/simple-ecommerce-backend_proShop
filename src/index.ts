import express from 'express'
import dotEnv from 'dotenv'
import CORS from 'cors';
import connectDB from './config/db';
import productsRoutes from './routes/products';
import usersRoutes from './routes/users';
import {notFound,errorHandler} from './middleware/errorHandler';
dotEnv.config()
const app = express();
connectDB();

app.use(express.json())
app.use(CORS());
app.use('/public',express.static('public'))

app.get('/',(_,res)=>{
    res.send('API is running ...')
})

app.use('/api/products',productsRoutes)
app.use('/api/users',usersRoutes)

app.use(notFound,errorHandler)

const port = process.env.PORT || 5000;

app.listen(port,()=>{console.log(`Server started on port ${port}`)})