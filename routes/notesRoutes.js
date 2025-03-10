const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/hotelnotes', noteController.getHotelNotes);
router.get('/bookingnotes', noteController.getBookingNotes);
router.get('/customernotes', noteController.getCustomerNotes);

module.exports = router;