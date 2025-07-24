const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.post("/hotelnotes/addedit", noteController.AddHotelNotes);
router.get("/hotelnotes", noteController.getHotelNotes);
router.post("/bookingnotes/addedit", noteController.AddBookingNotes);
router.get("/bookingnotes", noteController.getBookingNotes);
router.post("/customernotes/addedit", noteController.AddCustomerNotes);
router.get("/customernotes", noteController.getCustomerNotes);

module.exports = router;
