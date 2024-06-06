const mongoose = require('mongoose');
const {Customer} = require('./customers');

const roleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const Role = mongoose.model('Role',roleSchema)

const userRoleSchema =  new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }
})

const UserRole = mongoose.model('UserRole',userRoleSchema)

module.exports = {Role,UserRole};