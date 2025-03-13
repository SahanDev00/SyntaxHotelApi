const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/customers', customerController.getCustomers);
router.get('/count', customerController.getCustomerCount);
router.get('/category', customerController.getCustomerCategory);
router.get('/customerbybookingid', customerController.getCustomerByBookingID);
router.post('/addeditcustomers', customerController.AddEditCustomer);
router.post('/addeditcustomercategory', customerController.AddEditCustomerCategory);
router.delete('/deletecategory', customerController.DeleteCustomerCategory);

module.exports = router;