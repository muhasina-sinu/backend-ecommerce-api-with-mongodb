const express = require('express');
const { createCustomer, getCustomers, login } = require('../controllers/customers');
const router = express.Router();

router.post('/',createCustomer);
router.get('/',getCustomers);
router.post('/login',login);

module.exports = router;