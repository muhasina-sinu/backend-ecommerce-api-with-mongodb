const {Role,UserRole} =require('../models/roles');

async function getRoles(){
    const roles = await Role.find();
    return roles;
}
async function createRole(newRole){
    const savedData = await Role.create(newRole);
    return savedData;
}
async function getUserRoles(){
    const userRoles = await UserRole.find();
    return userRoles;
}
async function createUserRole(newUserRole){
    const savedData = await UserRole.create(newUserRole);
    return savedData;
}

async function getRolesById(userid){
    const userRoles = await UserRole.find({customer:userid}).populate('role');
    const roles = userRoles.map(userRole => userRole.role);

    return roles;
    
}
module.exports = { getRoles,createRole,getUserRoles,createUserRole,getRolesById};