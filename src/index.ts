import express from 'express'
import dotEnv from 'dotenv'
import CORS from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './config/swagger';
import connectDB from './config/db';
import productsRoutes from './routes/products';
import usersRoutes from './routes/users';
import ordersRoutes from './routes/orders';
import {notFound,errorHandler} from './middleware/errorHandler';
import auth from './middleware/auth';
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
app.use('/api/orders',ordersRoutes)

app.get('/api/config/paypal',auth,(_,res)=>res.send(process.env.PAYPAL_CLIENT_ID))
const specs = swaggerJsdoc(swaggerOptions);
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs,{ explorer: true })
);

app.use(notFound,errorHandler)

const port = process.env.PORT || 5000;

app.listen(port,()=>{console.log(`Server started on port ${port}`)})