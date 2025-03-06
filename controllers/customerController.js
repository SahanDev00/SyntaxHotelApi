const customerService = require('../services/customerService');

const getCustomers = async (req, res) => {
    try {
        const data = {
            APIKey: process.env.APIKey, 
            CustomerID: req.query.CustomerID ? parseInt(req.query.CustomerID) : null,
            CustomerCategoryID: req.query.CustomerCategoryID ? parseInt(req.query.CustomerCategoryID) : null,
            FullName: req.query.FullName || null,
            Phone: req.query.Phone || null,
            Email: req.query.Email || null,
            Status: req.query.Status || null,
        };

        const customers = await customerService.getCustomers(data);

        if (rooms.length === 0) {
            return res.status(404).json({ message: "No customers found" });
        }

        res.status(200).json(customers);
    } catch (err) {
        console.error("🔥 Error in getCustomer controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getCustomerCategory = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: process.env.APIKey, // Fetch API key from environment variables
            CategoryID: req.query.CategoryID ? parseInt(req.query.CategoryID) : null,
            CategoryName: req.query.CategoryName || null,
            AdditionalFeeRate: req.query.AdditionalFeeRate || null,
            AdditionalFeeAmount: req.query.AdditionalFeeAmount || null,
        };

        // Call the service function to fetch customer categories
        const categories = await customerService.getCustomerCategory(data);

        // If no categories are found, return 404
        if (categories.length === 0) {
            return res.status(404).json({ message: "No customer categories found" });
        }

        // Return the categories list as JSON response
        res.status(200).json(categories);
    } catch (err) {
        // Log error and send internal server error response
        console.error("🔥 Error in getCustomerCategory controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getCustomers, getCustomerCategory };
