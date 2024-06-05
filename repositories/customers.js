const {Customer} = require('../models/customers');

async function createCustomer(newCustomer){
    const newData = await Customer.create(newCustomer)
    return newData;
}

async function getCustomers(){
    const customers = await Customer.find();
    return customers;
}
async function getCustomer(email) {

    const customer= await Customer.findOne({ email: email });;
    return customer;
    }
  


module.exports ={ createCustomer,getCustomers,getCustomer}