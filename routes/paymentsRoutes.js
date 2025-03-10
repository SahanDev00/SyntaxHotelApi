const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

router.get('/payments', paymentsController.getPayments);

module.exports = router;
