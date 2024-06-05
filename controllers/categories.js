const {Category } =require('../models/products');
const categoryRepositories = require('../repositories/categories');


const getCategories = async(req,res)=>{
    const categories = await categoryRepositories.getCategories();
    res.status(200).json(categories);
}


const createCategory = async(req,res)=>{
    const newCategory= new Category({
        name :req.body.name
    })
    const savedData = await categoryRepositories.createCategory(newCategory);
    res.status(201).json(savedData);
}

module.exports = {getCategories,createCategory};