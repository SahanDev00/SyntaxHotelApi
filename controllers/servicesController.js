const serviceService = require('../services/serviceService'); // Ensure correct path

// Controller to get services
const getService = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Get API key from env
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
        console.error("🔥 Error in getService controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to get service orders
const getServiceOrders = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Get API key from env
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
        console.error("🔥 Error in getServiceOrders controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getService, getServiceOrders };
