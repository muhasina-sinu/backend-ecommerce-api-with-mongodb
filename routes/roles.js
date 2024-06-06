const express = require('express');
const { createRole,getRoles,getUserRoles,createUserRole } = require('../controllers/roles');
const { verifyRoles,verifyTokenHandler } = require("../middlewares/jwtHandler");
const router = express.Router();

router.post('/',[verifyTokenHandler,verifyRoles(['admin'])],createRole);
router.get('/',[verifyTokenHandler,verifyRoles(['admin'])],getRoles);
router.post('/userrole',[verifyTokenHandler,verifyRoles(['admin'])],createUserRole);
router.get('/userrole',[verifyTokenHandler,verifyRoles(['admin'])],getUserRoles);

module.exports = router;