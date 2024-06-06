const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const products = require('./routes/products');
const customers = require('./routes/customers');
const orders = require('./routes/orders');
const errorHandler =require('./middlewares/errorHandler');


dotenv.config();
const port = process.env.PORT || 3000;
const db_connection_string = process.env.DATABASE_URL;

const app = express();
app.use(express.json());
app.use('/api/products',products);
app.use('/api/customers',customers);
app.use('/api/orders',orders);

app.use(errorHandler);

mongoose.connect(db_connection_string);
const db = mongoose.connection;

db.on('error',(error)=>{
    console.log("error",error)
});
db.once("connected",()=>{
    console.log("connected to db");
})

app.listen(port,()=>{
    console.log("listening on",port);
})