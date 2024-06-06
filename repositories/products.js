const {Product } =require('../models/products')



async function getProducts(){
    const products = await Product.find().populate(['category','brand']);
    return products;
}

async function getProductById(id){
    const product = await Product.findById(id).populate(['category','brand']);
    return product;
}

async function createProduct(newProduct){
    const savedData = await Product.create(newProduct);
    return savedData;
}

async function updateProduct(id,data){
    const newData = await Product.findByIdAndUpdate(id,data,{new: true});
    return newData;
}

async function deleteProduct(id){
    const result = await Product.findByIdAndDelete(id);
    return result;
}

async function getProductsByBrandId(brand_id){
    const result = await Product.find({brand:brand_id}).populate(['category','brand']);
    return result;
}
async function getProductsByCategoryId(category_id){
    const result = await Product.find({category:category_id}).populate(['category','brand']);
    return result;
}

async function getUnitPrice(product_id){
    const result = await Product.findOne({_id:product_id});
    return result.price;
}

module.exports= { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByBrandId,
    getProductsByCategoryId,
    getUnitPrice
    
};