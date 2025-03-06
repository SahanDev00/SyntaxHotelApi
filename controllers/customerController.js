const customerService = require('../services/customerService');

const getCustomers = async (req, res) => {
    try {
        const data = {
            APIKey: req.headers['apikey'], 
            CustomerID: req.query.CustomerID ? parseInt(req.query.CustomerID) : null,
            CustomerCategoryID: req.query.CustomerCategoryID ? parseInt(req.query.CustomerCategoryID) : null,
            FullName: req.query.FullName || null,
            Phone: req.query.Phone || null,
            Email: req.query.Email || null,
            Status: req.query.Status || null,
        };

        const customers = await customerService.getCustomers(data);

        if (customers.length === 0) {
            return res.status(404).json({ message: "No customers found" });
        }

        res.status(200).json(customers);
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

const getCustomerCategory = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'],
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
        // Check if the error is from SQL (or from the stored procedure)
        if (err.originalError) {
            const sqlErrorMessage = err.originalError.message || 'An unknown error occurred';
            return res.status(500).json({ error: sqlErrorMessage });
        } else {
            return res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

const getCustomerCount = async (req, res) => {
    try {
        // Extract query parameters from request
        const data = {
            APIKey: req.headers['apikey'],
        };

        // Call the service function to fetch customer categories
        const count = await customerService.getCustomerCount(data);

        // Return the categories list as JSON response
        res.status(200).json(count);
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

module.exports = { getCustomers, getCustomerCategory, getCustomerCount };
