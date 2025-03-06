const bookingService = require('../services/bookingService'); // Ensure correct path

const getBookings = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: process.env.APIKey, // Fetch API key from environment variables
            BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
            CustomerID: req.query.CustomerID ? parseInt(req.query.CustomerID) : null,
            RoomID: req.query.RoomID ? parseInt(req.query.RoomID) : null,
            TableID: req.query.TableID ? parseInt(req.query.TableID) : null,
            BookingStatus: req.query.BookingStatus || null,
            PaidStatus: req.query.PaidStatus || null,
            CheckInDate: req.query.CheckInDate || null,
            CheckOutDate: req.query.CheckOutDate || null,
        };

        // Call the service function to fetch bookings
        const bookings = await bookingService.getBookings(data);

        // If no bookings are found, return 404
        if (bookings.length === 0) {
            return res.status(404).json({ message: "No bookings found" });
        }

        // Return the bookings list as JSON response
        res.status(200).json(bookings);
    } catch (err) {
        // Log error and send internal server error response
        console.error("🔥 Error in getBookings controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getBookings };
