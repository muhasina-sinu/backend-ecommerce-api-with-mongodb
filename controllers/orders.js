const asyncHandler = require('../middlewares/asyncHandler');
const {Order} = require('../models/orders');
const orderRepositories = require('../repositories/orders');
const productRepositories = require('../repositories/products');

//@desc create order
//@router get /api/orders
//@access customer
const createOrder = asyncHandler( async (req,res,next)=>{
    
        let total_amount = 0;
        const details = req.body.orderDetails;
        const orderDetails = [];

        for (const od of details) {
            const unit_price = await productRepositories.getUnitPrice(od.product);
            const total_price = unit_price * od.quantity;
            total_amount += total_price;
            orderDetails.push({
                product: od.product,
                quantity: od.quantity,
                unit_price,
                total_price
            });
        }
    
    const newOrder = new Order({
        customer: req.userid,
        total_amount: total_amount,
        orderDetails :orderDetails
    });
    console.log(newOrder);
    const newData =await orderRepositories.createOrder(newOrder);
    res.status(201).json(newData);
    
    
})

//@desc get orders
//@router get /api/orders
//@access customer
const getOrders = asyncHandler(async(req,res,next)=>{
    const user_id = req.userid;
    const orders= await orderRepositories.getOrders(user_id);
    res.status(200).json(orders);
})

module.exports = {createOrder,getOrders}