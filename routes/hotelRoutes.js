const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.get('/rooms', hotelController.getRooms);
router.get('/availablerooms', hotelController.GetAvailableRoomsCount);
router.get('/availabletables', hotelController.GetAvailableTablesCount);
router.get('/roomtypes', hotelController.getRoomTypes);
router.get('/tables', hotelController.getTables);
router.get('/tabletypes', hotelController.getTableTypes);
router.get('/inventory', hotelController.getInventoryItems);
router.post('/addrooms', hotelController.AddRooms);
router.post('/addroomtypes', hotelController.AddRoomTypes);
router.delete('/deleteroom', hotelController.DeleteRooms);
router.delete('/deleteroomtype', hotelController.DeleteRoomType);
router.post('/addtabletypes', hotelController.AddTableTypes);

module.exports = router;
