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

const getRoomTypes = async (req, res) => {
    try {
        // Create the data object with request query parameters
        const data = {
            APIKey: process.env.APIKey, // API Key assumed to be in environment variables
            RoomTypeID: req.query.RoomTypeID ? parseInt(req.query.RoomTypeID) : null,
            TypeName: req.query.TypeName || null,
            MinPrice: req.query.MinPrice ? parseFloat(req.query.MinPrice) : null, // Use parseFloat for price
            MaxPrice: req.query.MaxPrice ? parseFloat(req.query.MaxPrice) : null, // Use parseFloat for price
        };

        // Call the service to fetch room types
        const roomTypes = await hotelService.getRoomTypes(data); // Assuming hotelService.getRoomTypes is your service function

        // If no rooms are found, return 404
        if (rooms.length === 0) {
            return res.status(404).json({ message: "No rooms found" });
        }

        // Return the rooms as JSON
        res.status(200).json(roomTypes);
    } catch (err) {
        // Log error and send internal server error response
        console.error("🔥 Error in getRoomTypes controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getTables = async (req, res) => {
    try {
        // Create the data object from query parameters
        const data = {
            APIKey: process.env.APIKey, // Assuming API key is in environment variables
            TableID: req.query.TableID ? parseInt(req.query.TableID) : null,
            TableNumber: req.query.TableNumber || null,
            TableTypeID: req.query.TableTypeID ? parseInt(req.query.TableTypeID) : null,
            Status: req.query.Status || null,
        };

        // Call the service to get tables based on the data
        const tables = await hotelService.getTables(data); // Assuming hotelService.getTables is your service function

        // If no tables are found, return a 404 error
        if (tables.length === 0) {
            return res.status(404).json({ message: "No tables found" });
        }

        // Return the tables as JSON
        res.status(200).json(tables);
    } catch (err) {
        // Log error and send internal server error response
        console.error("🔥 Error in getTables controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getTableTypes = async (req, res) => {
    try {
        // Create the data object from query parameters
        const data = {
            APIKey: process.env.APIKey, // Assuming API key is in environment variables
            TableTypeID: req.query.TableTypeID ? parseInt(req.query.TableTypeID) : null,
            TypeName: req.query.TypeName || null,
            MinPrice: req.query.MinPrice ? parseFloat(req.query.MinPrice) : null, // Use parseFloat for price
            MaxPrice: req.query.MaxPrice ? parseFloat(req.query.MaxPrice) : null, // Use parseFloat for price
        };

        // Call the service to get table types based on the data
        const tableTypes = await hotelService.getTableTypes(data); // Assuming hotelService.getTableTypes is your service function

        // If no table types are found, return a 404 error
        if (tableTypes.length === 0) {
            return res.status(404).json({ message: "No table types found" });
        }

        // Return the table types as JSON
        res.status(200).json(tableTypes);
    } catch (err) {
        // Log error and send internal server error response
        console.error("🔥 Error in getTableTypes controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getInventoryItems = async (req, res) => {
    try {
        // Create the data object from query parameters
        const data = {
            APIKey: process.env.APIKey, // Assuming API key is in environment variables
            ItemID: req.query.ItemID ? parseInt(req.query.ItemID) : null,
            ItemName: req.query.ItemName || null,
            Status: req.query.Status || null,
        };

        // Call the service to get inventory items based on the data
        const inventoryItems = await hotelService.getInventoryItems(data); // Assuming hotelService.getInventoryItems is your service function

        // If no inventory items are found, return a 404 error
        if (inventoryItems.length === 0) {
            return res.status(404).json({ message: "No inventory items found" });
        }

        // Return the inventory items as JSON
        res.status(200).json(inventoryItems);
    } catch (err) {
        // Log error and send internal server error response
        console.error("🔥 Error in getInventoryItems controller:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getRooms, getRoomTypes, getTables, getTableTypes, getInventoryItems };
