const serviceService = require('../services/servicesService'); // Ensure correct path

// Controller to get services
const getService = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: req.headers['apikey'], // Get API key from env
            ServiceID: req.query.ServiceID ? parseInt(req.query.ServiceID) : null,
            ServiceName: req.query.ServiceName || null,
            price: req.query.price ? parseFloat(req.query.price) : null,
        };

        // Call the service function
        const services = await serviceService.getService(data);

        if (services.length === 0) {
            return res.status(404).json({ message: "No services found" });
        }

        res.status(200).json(services);
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

// Controller to get service orders
const getServiceOrders = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: req.headers['apikey'], 
            ServiceOrderID: req.query.ServiceOrderID ? parseInt(req.query.ServiceOrderID) : null,
            BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
            ServiceID: req.query.ServiceID ? parseInt(req.query.ServiceID) : null,
            Status: req.query.Status || null,
        };

        // Call the service function
        const serviceOrders = await serviceService.getServiceOrders(data);

        if (serviceOrders.length === 0) {
            return res.status(404).json({ message: "No service orders found" });
        }

        res.status(200).json(serviceOrders);
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

// Controller to get service orders count
const getServiceOrdersCount = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: req.headers['apikey'], 
            ServiceOrderID: req.query.ServiceOrderID ? parseInt(req.query.ServiceOrderID) : null,
            BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
            ServiceID: req.query.ServiceID ? parseInt(req.query.ServiceID) : null,
            Status: req.query.Status || null,
        };

        // Call the service function
        const serviceOrdersCount = await serviceService.getServiceOrdersCount(data);

        res.status(200).json(serviceOrdersCount);
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

module.exports = { getService, getServiceOrders, getServiceOrdersCount };
