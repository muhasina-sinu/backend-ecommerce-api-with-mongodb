const {Product } =require('../models/products');
const productRepositories = require('../repositories/products');


const getProducts = async(req,res)=>{
    const products = await productRepositories.getProducts();
    res.status(200).json(products);
}

const getProductById = async(req,res)=>{
    const id=req.params.id;
    const product = await productRepositories.getProductById(id);
    res.status(200).json(product);
}


const createProduct = async(req,res)=>{
    const newProduct= new Product({
        title :req.body.title,
        price :req.body.price,
        category:req.body.category,
        brand:req.body.brand
    })
    try {
        const savedData = await productRepositories.createProduct(newProduct);
        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json(error.message);
    }
   
}

const updateProduct = async(req,res)=>{
    const id= req.params.id;
    const data=req.body;
    try {
        const newData = await productRepositories.updateProduct(id,data);
        res.status(201).json(newData);
    }
     catch (error) {
        res.status(500).json(error.message);
    }
    
    
}

const deleteProduct = async(req,res)=>{
    const id=req.params.id;
    const result = await productRepositories.deleteProduct(id);
    res.status(200).json({message:"product deleted succesfully"});
}

const getProductsByBrandId = async (req,res)=>{
    const brand_id=req.params.id;
    const products = await productRepositories.getProductsByBrandId(brand_id);
    res.status(200).json(products);
}

const getProductsByCategoryId = async (req,res)=>{
    const category_id=req.params.id;
    const products = await productRepositories.getProductsByCategoryId(category_id);
    res.status(200).json(products);
}
    

module.exports = {
getProducts,
createProduct,
getProductById,
updateProduct,
deleteProduct,
getProductsByBrandId,
getProductsByCategoryId};