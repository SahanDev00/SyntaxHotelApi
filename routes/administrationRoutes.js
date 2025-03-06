const express = require('express');
const router = express.Router();
const administrationController = require('../controllers/administrationController');

router.get('/invoices', administrationController.getInvoices);
router.get('/users', administrationController.getUsers);
router.get('/roles', administrationController.getRoles);

module.exports = router;
