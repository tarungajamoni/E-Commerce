const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')
//require('dotenv').config();
//const { env } = require('process');

const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');
const path = require('path')


//middlewares
server.use(express.static(path.resolve(__dirname,'build')));
server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); // to parse req.body
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)
server.use('/users', usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', cartRouter.router)
server.use('/orders', ordersRouter.router)

main().catch(err=> console.log(err));

async function main(){
   // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    await mongoose.connect('mongodb+srv://saitag:saitag@cluster0.enwuvkk.mongodb.net/e-commerce?retryWrites=true&w=majority');
    console.log('database connected')
}
// async function main() {
//     await mongoose.connect(process.env.MONGO);
//     console.log('database connected');
//   }
server.get('/',(req, res)=>{
    res.json({status:'success'})
})

server.listen(8080, ()=>{
    console.log('server started')
})

// server.listen(process.env.PORT, () => {
//     console.log('server started');
//   });
