const hotelService = require("../services/hotelService");

const getRooms = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
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
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const GetAvailableRoomsCount = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
    };

    const AvailableRoomsCount = await hotelService.GetAvailableRoomsCount(data);

    res.status(200).json(AvailableRoomsCount);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const getRoomTypes = async (req, res) => {
  try {
    // Create the data object with request query parameters
    const data = {
      APIKey: req.headers["apikey"],
      RoomTypeID: req.query.RoomTypeID ? parseInt(req.query.RoomTypeID) : null,
      TypeName: req.query.TypeName || null,
      MinPrice: req.query.MinPrice ? parseFloat(req.query.MinPrice) : null, // Use parseFloat for price
      MaxPrice: req.query.MaxPrice ? parseFloat(req.query.MaxPrice) : null, // Use parseFloat for price
    };

    // Call the service to fetch room types
    const roomTypes = await hotelService.getRoomTypes(data); // Assuming hotelService.getRoomTypes is your service function

    // If no rooms are found, return 404
    if (roomTypes.length === 0) {
      return res.status(404).json({ message: "No rooms found" });
    }

    // Return the rooms as JSON
    res.status(200).json(roomTypes);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const getTables = async (req, res) => {
  try {
    // Create the data object from query parameters
    const data = {
      APIKey: req.headers["apikey"],
      TableID: req.query.TableID ? parseInt(req.query.TableID) : null,
      TableNumber: req.query.TableNumber || null,
      TableTypeID: req.query.TableTypeID
        ? parseInt(req.query.TableTypeID)
        : null,
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

const GetAvailableTablesCount = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
    };

    const AvailableTablesCount = await hotelService.GetAvailableTablesCount(
      data
    );

    res.status(200).json(AvailableTablesCount);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const getTableTypes = async (req, res) => {
  try {
    // Create the data object from query parameters
    const data = {
      APIKey: req.headers["apikey"],
      TableTypeID: req.query.TableTypeID
        ? parseInt(req.query.TableTypeID)
        : null,
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
      APIKey: req.headers["apikey"],
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

const AddItems = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      itemID: req.body.roomID ? parseInt(req.body.roomID) : null,
      item_name: req.body.item_name,
      item_description: req.body.item_description,
      item_price: req.body.item_price,
      status: req.body.status || "Available",
    };

    const items = await hotelService.AddItems(data);

    res.status(200).json(items);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const AddRooms = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      roomID: req.body.roomID ? parseInt(req.body.roomID) : null,
      room_number: req.body.room_number,
      roomTypeID: req.body.roomTypeID ? parseInt(req.body.roomTypeID) : null,
      status: req.body.status || "Available",
    };

    const rooms = await hotelService.AddRooms(data);

    res.status(200).json(rooms);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const AddRoomTypes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      roomTypeID: req.body.roomTypeID ? parseInt(req.body.roomTypeID) : null,
      type_name: req.body.type_name,
      description: req.body.description || "",
      price_per_night: req.body.price_per_night,
    };

    const roomTypes = await hotelService.AddRoomTypes(data);

    res.status(200).json(roomTypes);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const DeleteRooms = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      roomID: req.body.roomID,
    };

    const room = await hotelService.DeleteRooms(data);

    res.status(200).json(room);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const DeleteRoomType = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      roomTypeID: req.body.roomTypeID,
    };

    const roomTypes = await hotelService.DeleteRoomType(data);

    res.status(200).json(roomTypes);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const AddTables = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      tableID: req.body.tableID ? parseInt(req.body.tableID) : null,
      table_number: req.body.table_number,
      tableTypeID: req.body.tableTypeID ? parseInt(req.body.tableTypeID) : null,
      status: req.body.status || "Available",
    };

    const tables = await hotelService.AddTables(data);

    res.status(200).json(tables);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const AddTableTypes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      tableTypeID: req.body.tableTypeID ? parseInt(req.body.tableTypeID) : null,
      type_name: req.body.type_name,
      description: req.body.description || "",
      price_per_hour: req.body.price_per_hour,
    };

    const tableTypes = await hotelService.AddTableTypes(data);

    res.status(200).json(tableTypes);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

module.exports = {
  getRooms,
  getRoomTypes,
  getTables,
  getTableTypes,
  getInventoryItems,
  GetAvailableRoomsCount,
  GetAvailableTablesCount,
  AddRooms,
  AddRoomTypes,
  DeleteRooms,
  DeleteRoomType,
  AddTableTypes,
  AddTables,
  AddItems,
};
