const express = require('express');
const router = express.Router();
const housekeepingController = require('../controllers/housekeepingController');

router.get('/housekeeping', housekeepingController.getHousekeeping);

module.exports = router;
