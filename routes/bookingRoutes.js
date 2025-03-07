const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/bookings', bookingController.getBookings);
router.get('/roombookings', bookingController.getRoomBookings);
router.get('/tablebookings', bookingController.getTableBookings);
router.get('/pendingcounts', bookingController.GetPendingPaymentsCount);
router.get('/upcomingreservations', bookingController.GetUpcomingReservations);

module.exports = router;