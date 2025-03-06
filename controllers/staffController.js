const staffService = require('../services/staffService'); // Ensure correct path

// Controller to get staff details
const getStaff = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Get API key from env
            StaffID: req.query.StaffID ? parseInt(req.query.StaffID) : null,
            UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
            FirstName: req.query.FirstName || null,
            LastName: req.query.LastName || null,
            NIC: req.query.NIC || null,
            MobileNumber: req.query.MobileNumber || null,
            PositionID: req.query.PositionID ? parseInt(req.query.PositionID) : null,
            SalaryMin: req.query.SalaryMin ? parseFloat(req.query.SalaryMin) : null,
            SalaryMax: req.query.SalaryMax ? parseFloat(req.query.SalaryMax) : null,
            HiredDate: req.query.HiredDate || null,
            Status: req.query.Status || null,
        };

        // Call the service function
        const staff = await staffService.getStaff(data);

        if (staff.length === 0) {
            return res.status(404).json({ message: "No staff found" });
        }

        res.status(200).json(staff);
    } catch (err) {
        console.error("🔥 Error in getStaff controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to get staff positions
const getStaffPositions = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Get API key from env
            PositionID: req.query.PositionID ? parseInt(req.query.PositionID) : null,
            PositionName: req.query.PositionName || null,
        };

        // Call the service function
        const positions = await staffService.getStaffPositions(data);

        if (positions.length === 0) {
            return res.status(404).json({ message: "No staff positions found" });
        }

        res.status(200).json(positions);
    } catch (err) {
        console.error("🔥 Error in getStaffPositions controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getStaff, getStaffPositions };
