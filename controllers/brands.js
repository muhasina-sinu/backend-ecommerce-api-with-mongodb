const {Brand } =require('../models/products');
const asyncHandler = require('../middlewares/asyncHandler');
const brandRepositories = require('../repositories/brands');
 
//@desc get brands
//@router get /api/products/brands
//@access public
const getBrands = asyncHandler(async(req,res,next)=>{
    try {
        const brands = await brandRepositories.getBrands();
        res.status(200).json(brands);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
})

//@desc create brand
//@router post /api/products/brands
//@access public
const createBrand = asyncHandler(async(req,res)=>{
    const newBrand= new Brand({
        name :req.body.name
    })
    const savedData = await brandRepositories.createBrand(newBrand);
    res.status(201).json(savedData);
}
)
module.exports = {getBrands,createBrand};