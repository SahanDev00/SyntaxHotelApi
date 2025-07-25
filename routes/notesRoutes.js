const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.post("/hotelnotes/addedit", noteController.AddHotelNotes);
router.get("/hotelnotes", noteController.getHotelNotes);
router.post("/bookingnotes/addedit", noteController.AddBookingNotes);
router.get("/bookingnotes", noteController.getBookingNotes);
router.post("/customernotes/addedit", noteController.AddCustomerNotes);
router.get("/customernotes", noteController.getCustomerNotes);
router.delete("/hotelnotes/delete", noteController.deleteHotelNotes);
router.delete("/bookingnotes/delete", noteController.deleteBookingNotes);
router.delete("/customernotes/delete", noteController.deleteCustomerNotes);

module.exports = router;
