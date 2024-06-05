const {Customer} = require('../models/customers');
const customerRepositories = require('../repositories/customers');
const { createJwt } = require('../utils/jwtHelper');
const { hashPassword,verifyPassword } = require('../utils/passwordhelper');

const createCustomer =async (req,res)=>{
    const hashedPassword = hashPassword(req.body.password);
    const newCustomer = new Customer({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    });
    const savedData = await customerRepositories.createCustomer(newCustomer);
    const token = createJwt(savedData._id);
    res.status(201).json({message:"new user created succesfully",
    user:savedData.name,
    token:token});

}

const login = async (req,res,next)=>{
    const {email,password} = req.body;
    const customers =  await customerRepositories.getCustomer(email);
    if(!customers || customers.length == 0){
      return res.status(400).json("invalid credentials");
    }
    console.log(customers);
    const isValid = verifyPassword(password,customers.password);
    if(isValid){
      const token = createJwt(customers._id);
      res.status(200).json({ 
          message: "logged in successfully",
          name:`${customers.name}`,
          token : token
       });
    }
    return res.status(400).json("invalid credentials");
  };

const getCustomers = async(req,res)=>{
    const customers = await customerRepositories.getCustomers();
    res.status(200).json(customers);
}


module.exports = {createCustomer,getCustomers,login};