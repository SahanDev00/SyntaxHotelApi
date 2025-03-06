const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.get('/rooms', hotelController.getRooms);
router.get('/roomtypes', hotelController.getRoomTypes);
router.get('/tables', hotelController.getTables);
router.get('/tabletypes', hotelController.getTableTypes);
router.get('/inventory', hotelController.getInventoryItems);

module.exports = router;
