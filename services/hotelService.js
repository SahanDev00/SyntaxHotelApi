const { sql, poolPromise } = require("../config/db");

const getRooms = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("RoomID", sql.Int, data.RoomID)
      .input("RoomNumber", sql.VarChar(10), data.RoomNumber)
      .input("RoomTypeID", sql.Int, data.RoomTypeID)
      .input("Status", sql.VarChar(20), data.Status)
      .execute("[room].roomsGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const GetAvailableRoomsCount = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .execute("[room].AvailableRoomsCount");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getRoomTypes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("RoomTypeID", sql.Int, data.RoomTypeID)
      .input("TypeName", sql.VarChar(50), data.TypeName)
      .input("MinPrice", sql.Decimal(10, 2), data.MinPrice)
      .input("MaxPrice", sql.Decimal(10, 2), data.MaxPrice)
      .execute("[room].roomTypesGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getTables = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("TableID", sql.Int, data.TableID)
      .input("TableNumber", sql.VarChar(10), data.TableNumber)
      .input("TableTypeID", sql.Int, data.TableTypeID)
      .input("Status", sql.VarChar(20), data.Status)
      .execute("[tab].tablesGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const GetAvailableTablesCount = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .execute("[tab].AvailableTablesCount");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getTableTypes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("TableTypeID", sql.Int, data.TableTypeID)
      .input("TypeName", sql.VarChar(50), data.TypeName)
      .input("MinPrice", sql.Decimal(10, 2), data.MinPrice)
      .input("MaxPrice", sql.Decimal(10, 2), data.MaxPrice)
      .execute("[tab].tableTypesGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getInventoryItems = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("ItemID", sql.Int, data.ItemID)
      .input("ItemName", sql.VarChar(50), data.ItemName)
      .input("Status", sql.VarChar(20), data.Status)
      .execute("[inv].inventoryGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddItems = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("itemID", sql.Int, data.itemID)
      .input("item_name", sql.VarChar(50), data.item_name)
      .input("item_description", sql.Text, data.item_description)
      .input("itemPrice", sql.Decimal(18, 2), data.item_price)
      .input("status", sql.VarChar(20), data.status)
      .execute("[inv].inventoryAddEdit");
    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddRooms = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("roomID", sql.Int, data.roomID)
      .input("room_number", sql.VarChar(10), data.room_number)
      .input("roomTypeID", sql.Int, data.roomTypeID)
      .input("status", sql.VarChar(20), data.status)
      .execute("[room].roomsAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddRoomTypes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("roomTypeID", sql.Int, data.roomTypeID)
      .input("type_name", sql.VarChar(50), data.type_name)
      .input("description", sql.Text, data.description)
      .input("price_per_night", sql.Decimal(10, 2), data.price_per_night)
      .execute("[room].roomTypesAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const DeleteRooms = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("roomID", sql.Int, data.roomID)
      .execute("[room].deleteRoom");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const DeleteRoomType = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("roomTypeID", sql.Int, data.roomTypeID)
      .execute("[room].deleteRoomType");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddTables = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("tableID", sql.Int, data.tableID)
      .input("table_number", sql.VarChar(10), data.table_number)
      .input("tableTypeID", sql.Int, data.tableTypeID)
      .input("status", sql.VarChar(20), data.status)
      .execute("[tab].tablesAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddTableTypes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("tableTypeID", sql.Int, data.tableTypeID)
      .input("type_name", sql.VarChar(50), data.type_name)
      .input("description", sql.Text, data.description)
      .input("price_per_hour", sql.Decimal(10, 2), data.price_per_hour)
      .execute("[tab].tableTypesAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

module.exports = {
  getRooms,
  getTables,
  getInventoryItems,
  getRoomTypes,
  getTableTypes,
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
