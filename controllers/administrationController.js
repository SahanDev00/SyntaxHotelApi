const administrationService = require('../services/administrationService'); // Ensure correct path

const getInvoices = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: req.headers['apikey'], 
            InvoiceID: req.query.InvoiceID ? parseInt(req.query.InvoiceID) : null,
            BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
            MinAmount: req.query.MinAmount ? parseFloat(req.query.MinAmount) : null,
            MaxAmount: req.query.MaxAmount ? parseFloat(req.query.MaxAmount) : null,
            InvoiceDate: req.query.InvoiceDate || null,
        };

        // Call the service function
        const invoices = await administrationService.getInvoices(data);

        if (invoices.length === 0) {
            return res.status(404).json({ message: "No invoices found" });
        }

        res.status(200).json(invoices);
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



const getUsers = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: req.headers['apikey'],
            UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
            Username: req.query.Username || null,
            Role: req.query.Role || null,
            Status: req.query.Status || null,
        };

        // Call the service function
        const users = await administrationService.getUsers(data);

        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(users);
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

const getRoles = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: req.headers['apikey'],
            RoleName: req.query.RoleName || null,
        };

        // Call the service function
        const usersRoles = await administrationService.getRoles(data);

        if (usersRoles.length === 0) {
            return res.status(404).json({ message: "No user roles found" });
        }

        res.status(200).json(usersRoles);
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

module.exports = { getInvoices, getUsers, getRoles };
