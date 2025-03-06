const express = require('express');
const router = express.Router();
const chartsController = require('../controllers/chartsController');

router.get('/monthlysales', chartsController.getMonthlySales);
router.get('/customergrowth', chartsController.getCustomerGrowth);
router.get('/upcommingevents', chartsController.getUpcomingEvents);
router.get('/events', chartsController.getEvents);

module.exports = router;