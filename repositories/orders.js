const {Order} = require('../models/orders');

async function createOrder(newOrder){
    const savedData = await Order.create(newOrder);
    return savedData;
}

async function getOrders(user_id){
    const savedData = await Order.find({customer:user_id});
    return savedData;
}

module.exports = {createOrder,getOrders};