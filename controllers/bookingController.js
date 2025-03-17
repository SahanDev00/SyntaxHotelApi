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

const GetTotalPrice = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'], 
            CustomerID: req.query.CustomerID ? parseInt(req.query.CustomerID) : null,
            roomID: req.query.roomID ? parseInt(req.query.roomID) : null,
            TableID: req.query.TableID ? parseInt(req.query.TableID) : null,
            CheckInDate: req.query.CheckInDate || null,
            CheckOutDate: req.query.CheckOutDate || null
        };

        // Call the service function to fetch bookings
        const totalPrice = await bookingService.GetTotalPrice(data);

        // If no bookings are found, return 404
        if (totalPrice.length === 0) {
            return res.status(404).json({ message: "total Price not found" });
        }

        // Return the bookings list as JSON response
        res.status(200).json(totalPrice);
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

const getRoomBookings = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'], 
            BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
            CustomerID: req.query.CustomerID ? parseInt(req.query.CustomerID) : null,
            RoomID: req.query.RoomID ? parseInt(req.query.RoomID) : null,
            BookingStatus: req.query.BookingStatus || null,
            PaidStatus: req.query.PaidStatus || null,
            CheckInDate: req.query.CheckInDate || null,
            CheckOutDate: req.query.CheckOutDate || null,
        };

        // Call the service function to fetch bookings
        const roomBookings = await bookingService.GetRoomBookings(data);

        // If no bookings are found, return 404
        if (roomBookings.length === 0) {
            return res.status(404).json({ message: "No room bookings found" });
        }

        // Return the bookings list as JSON response
        res.status(200).json(roomBookings);
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

const getTableBookings = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'], 
            BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
            CustomerID: req.query.CustomerID ? parseInt(req.query.CustomerID) : null,
            TableID: req.query.TableID ? parseInt(req.query.TableID) : null,
            BookingStatus: req.query.BookingStatus || null,
            PaidStatus: req.query.PaidStatus || null,
            CheckInDate: req.query.CheckInDate || null,
            CheckOutDate: req.query.CheckOutDate || null,
        };

        // Call the service function to fetch bookings
        const tableBookings = await bookingService.GetTableBookings(data);

        // If no bookings are found, return 404
        if (tableBookings.length === 0) {
            return res.status(404).json({ message: "No table bookings found" });
        }

        // Return the bookings list as JSON response
        res.status(200).json(tableBookings);
    } catch (err) {
        // Check if the error is from SQL (or from the stored procedure)
        if (err.originalError) {
            const sqlErrorMessage = err.originalError.message || 'An unknown error occurred' + err;
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


const AddRoomBooking = async (req, res) => {
    try {
        // Extract data from request body
        const data = {
            APIKey: req.headers['apikey'], 
            BookingID: req.body.BookingID ? parseInt(req.body.BookingID) : null,
            CustomerID: req.body.CustomerID ? parseInt(req.body.CustomerID) : null,
            roomID: req.body.roomID ? parseInt(req.body.roomID) : null,
            CheckInDate: req.body.CheckInDate,
            CheckOutDate: req.body.CheckOutDate,
            BookingStatus: req.body.BookingStatus || null,
            TotalPrice: req.body.TotalPrice,
            PaidStatus: req.body.PaidStatus || null,
            PaidPrice: req.body.PaidPrice || 0,
            StaffID: req.body.StaffID,
            PaymentMethod: req.body.PaymentMethod || null,
        };

        // Call the service function to add a booking
        const result = await bookingService.AddRoomBooking(data);

        res.status(200).json( result );
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

const AddTableBooking = async (req, res) => {
    try {
        // Extract data from request body
        const data = {
            APIKey: req.headers['apikey'], 
            BookingID: req.body.BookingID ? parseInt(req.body.BookingID) : null,
            CustomerID: req.body.CustomerID ? parseInt(req.body.CustomerID) : null,
            tableID: req.body.tableID ? parseInt(req.body.tableID) : null,
            CheckInDate: req.body.CheckInDate,
            CheckOutDate: req.body.CheckOutDate,
            BookingStatus: req.body.BookingStatus || null,
            TotalPrice: req.body.TotalPrice,
            PaidStatus: req.body.PaidStatus || null,
            PaidPrice: req.body.PaidPrice || 0,
            StaffID: req.body.StaffID,
            PaymentMethod: req.body.PaymentMethod || null,
        };

        // Call the service function to add a booking
        const result = await bookingService.AddTableBooking(data);

        res.status(200).json( result );
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

module.exports = { getBookings, GetPendingPaymentsCount, GetUpcomingReservations, getRoomBookings, getTableBookings, AddRoomBooking, GetTotalPrice, AddTableBooking };
