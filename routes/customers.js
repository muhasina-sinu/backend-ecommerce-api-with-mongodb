const express = require('express');
const { createCustomer, getCustomers, login } = require('../controllers/customers');
const router = express.Router();
const { verifyRoles,verifyTokenHandler } = require("../middlewares/jwtHandler");


router.post('/',createCustomer);
router.get('/',[verifyTokenHandler,verifyRoles(['admin'])],getCustomers);
router.post('/login',login);

module.exports = router;