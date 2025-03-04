const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.get('/rooms', hotelController.getRooms);

module.exports = router;
