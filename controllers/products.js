const asyncHandler = require('../middlewares/asyncHandler');
const {Product } =require('../models/products');
const productRepositories = require('../repositories/products');

//@desc get products
//@router get /api/products
//@access public
const getProducts =asyncHandler( async(req,res)=>{
    const products = await productRepositories.getProducts();
    res.status(200).json(products);
})

//@desc get product by id
//@router get /api/products/product_id
//@access public
const getProductById =asyncHandler( async(req,res)=>{
    const id=req.params.id;
    const product = await productRepositories.getProductById(id);
    res.status(200).json(product);
})

//@desc create product
//@router post /api/products
//@access public
const createProduct = asyncHandler(async(req,res)=>{
    const newProduct= new Product({
        title :req.body.title,
        price :req.body.price,
        category:req.body.category,
        brand:req.body.brand
    })
        const savedData = await productRepositories.createProduct(newProduct);
        res.status(201).json(savedData);

})

//@desc update product
//@router patch /api/products/product_id
//@access public
const updateProduct = asyncHandler(async(req,res)=>{
    const id= req.params.id;
    const data=req.body;
    try {
        const newData = await productRepositories.updateProduct(id,data);
        res.status(201).json(newData);
    }
     catch (error) {
        res.status(500).json(error.message);
    }
    
    
})

//@desc delete product
//@router delete /api/products/product_id
//@access public
const deleteProduct = asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const result = await productRepositories.deleteProduct(id);
    res.status(200).json({message:"product deleted succesfully"});
})

//@desc get products by brand id
//@router get /api/products/brands/search/brand_id
//@access public
const getProductsByBrandId =asyncHandler( async (req,res)=>{
    const brand_id=req.params.brand_id;
    const products = await productRepositories.getProductsByBrandId(brand_id);
    res.status(200).json(products);
})

//@desc get products by category id
//@router get /api/products/categories/search/category_id
//@access public
const getProductsByCategoryId =asyncHandler( async (req,res)=>{
    const category_id=req.params.category_id;
    const products = await productRepositories.getProductsByCategoryId(category_id);
    res.status(200).json(products);
})
    

module.exports = {
getProducts,
createProduct,
getProductById,
updateProduct,
deleteProduct,
getProductsByBrandId,
getProductsByCategoryId};