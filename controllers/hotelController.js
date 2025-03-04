const hotelService = require('../services/hotelService');

const getRooms = async (req, res) => {
    try {
        const data = {
            APIKey: process.env.APIKey, // Assuming API key is in headers
            RoomID: req.query.RoomID ? parseInt(req.query.RoomID) : null,
            RoomNumber: req.query.RoomNumber || null,
            RoomTypeID: req.query.RoomTypeID ? parseInt(req.query.RoomTypeID) : null,
            Status: req.query.Status || null,
        };

        const rooms = await hotelService.getRooms(data);

        if (rooms.length === 0) {
            return res.status(404).json({ message: "No rooms found" });
        }

        res.status(200).json(rooms);
    } catch (err) {
        console.error("🔥 Error in getRooms controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getRooms };
