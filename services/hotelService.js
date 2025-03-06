const { sql, poolPromise } = require('../config/db');

const getRooms = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('RoomID', sql.Int, data.RoomID)
            .input('RoomNumber', sql.VarChar(10), data.RoomNumber)
            .input('RoomTypeID', sql.Int, data.RoomTypeID)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[room].roomsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

const getRoomTypes = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('RoomTypeID', sql.Int, data.RoomTypeID)
            .input('TypeName', sql.VarChar(50), data.TypeName)
            .input('MinPrice', sql.Decimal(10,2), data.MinPrice)
            .input('MaxPrice', sql.Decimal(10,2), data.MaxPrice)
            .execute('[room].roomTypesGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

const getTables = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('TableID', sql.Int, data.TableID)
            .input('TableNumber', sql.VarChar(10), data.TableNumber)
            .input('TableTypeID', sql.Int, data.TableTypeID)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[tab].tablesGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

const getTableTypes = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('TableTypeID', sql.Int, data.TableTypeID)
            .input('TypeName', sql.VarChar(50), data.TypeName)
            .input('MinPrice', sql.Decimal(10,2), data.MinPrice)
            .input('MaxPrice', sql.Decimal(10,2), data.MaxPrice)
            .execute('[tab].tableTypesGet');

            return result.recordset;
    } catch (err) {
        console.error("Error in hotelService:", err);
        throw err;
    }
};

const getInventoryItems = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('ItemID', sql.Int, data.ItemID)
            .input('ItemName', sql.VarChar(50), data.ItemName)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[inv].inventoryGet');

            return result.recordset;
    } catch (err) {
        console.error("Error in hotelService:", err);
        throw err;
    }
};

module.exports = { getRooms, getTables, getInventoryItems, getRoomTypes, getTableTypes };
