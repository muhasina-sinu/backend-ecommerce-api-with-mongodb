const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const Brand = mongoose.model('Brand',brandSchema);

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const Category = mongoose.model('Category',categorySchema);

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    }
})
const Product = mongoose.model('Product',productSchema);


module.exports = {Brand,Category,Product};