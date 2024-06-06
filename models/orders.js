const mongoose = require('mongoose');
const {Customer} = require('./customers');
const {Product} = require('./products');

const orderLineSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    unit_price:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    total_price:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    }
})

const OrderLine = mongoose.model('OrderLine',orderLineSchema);

const orderSchema = new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    total_amount:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    orderDetails:[orderLineSchema]
    
})

const Order = mongoose.model('Order',orderSchema);





module.exports = {Order,OrderLine};