const noteService = require('../services/noteService');

const getHotelNotes = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey'],
            UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
        };

        const notes = await noteService.getHotelNotes(data);

        if (notes.length === 0) {
            return res.status(404).json({ message: "No Hotel Notes found" });
        }

        res.status(200).json(notes);
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

const getCustomerNotes = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey'],
            UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
        };

        const notes = await noteService.getCustomerNotes(data);

        if (notes.length === 0) {
            return res.status(404).json({ message: "No Customer Notes found" });
        }

        res.status(200).json(notes);
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

const getBookingNotes = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey'],
            UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
        };

        const notes = await noteService.getBookingNotes(data);

        if (notes.length === 0) {
            return res.status(404).json({ message: "No Booking Notes found" });
        }

        res.status(200).json(notes);
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

module.exports = { getHotelNotes, getCustomerNotes, getBookingNotes };
