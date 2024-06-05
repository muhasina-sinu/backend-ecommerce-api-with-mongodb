const {Category} = require('../models/products');

async function getCategories(){
    const categories = await Category.find();
    return categories;
}
async function createCategory(newCategory){
    const savedData = await Category.create(newCategory);
    return savedData;
}

module.exports = {getCategories,createCategory}