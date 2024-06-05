const {Brand } =require('../models/products');
const brandRepositories = require('../repositories/brands');
 

const getBrands = async(req,res)=>{
    const brands = await brandRepositories.getBrands();
    res.status(200).json(brands);
}


const createBrand = async(req,res)=>{
    const newBrand= new Brand({
        name :req.body.name
    })
    const savedData = await brandRepositories.createBrand(newBrand);
    res.status(201).json(savedData);
}

module.exports = {getBrands,createBrand};