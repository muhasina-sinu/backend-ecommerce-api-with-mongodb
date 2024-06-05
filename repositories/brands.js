const {Brand} =require('../models/products');

async function getBrands(){
    const brands = await Brand.find();
    return brands;
}
async function createBrand(newBrand){
    const savedData = await Brand.create(newBrand);
    return savedData;
}

module.exports = { getBrands,createBrand};