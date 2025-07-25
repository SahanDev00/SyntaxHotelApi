const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

router.get("/staff", staffController.getStaff);
router.post("/staff/addedit", staffController.AddStaff);
router.get("/positions", staffController.getStaffPositions);
router.post("/positions/addedit", staffController.AddStaffPositions);
router.delete("/positions/delete", staffController.deleteStaffPosition);

module.exports = router;
