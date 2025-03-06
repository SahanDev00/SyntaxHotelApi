const bookingService = require('../services/bookingService'); // Ensure correct path

const getBookings = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'], 
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
        // Check if the error is from SQL (or from the stored procedure)
        if (err.originalError) {
            const sqlErrorMessage = err.originalError.message || 'An unknown error occurred';
            return res.status(500).json({ error: sqlErrorMessage });
        } else {
            return res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

const GetPendingPaymentsCount = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'], 
        };

        // Call the service function to fetch bookings
        const pendingPaymentsCount = await bookingService.GetPendingPaymentsCount(data);

        // Return the bookings list as JSON response
        res.status(200).json(pendingPaymentsCount);
    } catch (err) {
        // Check if the error is from SQL (or from the stored procedure)
        if (err.originalError) {
            const sqlErrorMessage = err.originalError.message || 'An unknown error occurred';
            return res.status(500).json({ error: sqlErrorMessage });
        } else {
            return res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

const GetUpcomingReservations = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'], 
        };

        // Call the service function to fetch bookings
        const upcomingReservations = await bookingService.GetUpcomingReservations(data);

        // Return the bookings list as JSON response
        res.status(200).json(upcomingReservations);
    } catch (err) {
        // Check if the error is from SQL (or from the stored procedure)
        if (err.originalError) {
            const sqlErrorMessage = err.originalError.message || 'An unknown error occurred';
            return res.status(500).json({ error: sqlErrorMessage });
        } else {
            return res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

module.exports = { getBookings, GetPendingPaymentsCount, GetUpcomingReservations };
