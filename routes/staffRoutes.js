const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

router.get('/staff', staffController.getStaff);
router.get('/staffpositions', staffController.getStaffPositions);

module.exports = router;