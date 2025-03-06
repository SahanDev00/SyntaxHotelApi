const chartsService = require('../services/chartsService');

const getMonthlySales = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey']
        };

        const monthlySales = await chartsService.getMonthlySales(data);

        res.status(200).json(monthlySales);
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

const getCustomerGrowth = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey']
        };

        const customerGrowth = await chartsService.getCustomerGrowth(data);

        res.status(200).json(customerGrowth);
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

const getEvents = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey']
        };

        const events = await chartsService.getEvents(data);

        res.status(200).json(events);
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

const getUpcomingEvents = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey']
        };

        const upcomingEvents = await chartsService.getUpcomingEvents(data);

        res.status(200).json(upcomingEvents);
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

module.exports = { getMonthlySales, getCustomerGrowth, getUpcomingEvents, getEvents };