const asyncHandler = require('../middlewares/asyncHandler');
const {Category } =require('../models/products');
const categoryRepositories = require('../repositories/categories');

//@desc get categories
//@router get /api/products/categories
//@access public
const getCategories =asyncHandler( async(req,res)=>{
    const categories = await categoryRepositories.getCategories();
    res.status(200).json(categories);
})

//@desc post category
//@router post /api/products/category
//@access public
const createCategory = asyncHandler( async(req,res)=>{
    const newCategory= new Category({
        name :req.body.name
    })
    const savedData = await categoryRepositories.createCategory(newCategory);
    res.status(201).json(savedData);
})

module.exports = {getCategories,createCategory};