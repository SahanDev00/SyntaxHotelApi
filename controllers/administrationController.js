const administrationService = require('../services/administrationService'); // Ensure correct path

// Controller to get invoices
const getInvoices = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Secure API key from env
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
        console.error("🔥 Error in getInvoices controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getUsers = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Secure API key from env
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
        console.error("🔥 Error in getUsers controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getRoles = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Secure API key from env
            RoleName: req.query.RoleName || null,
        };

        // Call the service function
        const usersRoles = await administrationService.getRoles(data);

        if (users.length === 0) {
            return res.status(404).json({ message: "No user roles found" });
        }

        res.status(200).json(usersRoles);
    } catch (err) {
        console.error("🔥 Error in getRoles controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getInvoices, getUsers, getRoles };
