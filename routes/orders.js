const express = require('express');
const { createOrder,getOrders } = require('../controllers/orders');
const { verifyTokenHandler } = require('../middlewares/jwtHandler');
const router = express.Router();

router.post('/',[verifyTokenHandler],createOrder);
router.get('/',[verifyTokenHandler],getOrders);

module.exports = router;