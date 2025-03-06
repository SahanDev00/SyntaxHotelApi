const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

router.get('/services', servicesController.getService);
router.get('/serviceorders', servicesController.getServiceOrders);

module.exports = router;