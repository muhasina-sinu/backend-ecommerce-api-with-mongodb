const {Role,UserRole } =require('../models/roles');
const asyncHandler = require('../middlewares/asyncHandler');
const roleRepositories = require('../repositories/roles');
 
//@desc get roles
//@router get /api/roles
//@access public
const getRoles = asyncHandler(async(req,res,next)=>{
    try {
        const roles = await roleRepositories.getRoles();
        res.status(200).json(roles);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
})

//@desc create role
//@router post /api/roles
//@access public
const createRole = asyncHandler(async(req,res)=>{
    const newRole= new Role({
        name :req.body.name
    })
    const savedData = await roleRepositories.createRole(newRole);
    res.status(201).json(savedData);
}
)

//@desc get user roles
//@router get /api/roles/userroles
//@access public
const getUserRoles = asyncHandler(async(req,res,next)=>{
    try {
        const userRoles = await roleRepositories.getUserRoles();
        res.status(200).json(userRoles);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
})

//@desc create user role
//@router post /api/roles/userrole
//@access public
const createUserRole = asyncHandler(async(req,res)=>{
    const newUserRole= new UserRole({
        customer :req.body.customer,
        role:req.body.role
    })
    const savedData = await roleRepositories.createUserRole(newUserRole);
    res.status(201).json(savedData);
}
)
module.exports = {getRoles,createRole,getUserRoles,createUserRole};