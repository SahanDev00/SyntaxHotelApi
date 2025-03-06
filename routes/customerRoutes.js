const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/customers', customerController.getCustomers);
router.get('/customercategory', customerController.getCustomerCategory);

module.exports = router;