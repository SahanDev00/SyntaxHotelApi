const housekeepingService = require('../services/housekeepingService'); // Ensure correct path

// Controller to get housekeeping records
const getHousekeeping = async (req, res) => {
    try {
        // Extract query parameters
        const data = {
            APIKey: process.env.APIKey, // Secure API key from env
            HousekeepingID: req.query.HousekeepingID ? parseInt(req.query.HousekeepingID) : null,
            RoomID: req.query.RoomID ? parseInt(req.query.RoomID) : null,
            StaffID: req.query.StaffID ? parseInt(req.query.StaffID) : null,
            CleaningDate: req.query.CleaningDate || null,
            Status: req.query.Status || null,
        };

        // Call the service function
        const housekeepingRecords = await housekeepingService.getHousekeeping(data);

        if (housekeepingRecords.length === 0) {
            return res.status(404).json({ message: "No housekeeping records found" });
        }

        res.status(200).json(housekeepingRecords);
    } catch (err) {
        console.error("🔥 Error in getHousekeeping controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getHousekeeping };
