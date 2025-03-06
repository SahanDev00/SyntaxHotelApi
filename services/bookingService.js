const { sql, poolPromise } = require('../config/db');

const getBookings = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('BookingID', sql.Int, data.BookingID)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('RoomID', sql.Int, data.RoomID)
            .input('TableID', sql.Int, data.TableID)
            .input('BookingStatus', sql.VarChar(20), data.BookingStatus)
            .input('PaidStatus', sql.VarChar(20), data.PaidStatus)
            .input('CheckInDate', sql.Date, data.CheckInDate)
            .input('CheckOutDate', sql.Date, data.CheckOutDate)
            .execute('[boo].bookingsGet');

            return result.recordset;
    } catch (err) {
        console.error("Error in bookingService:", err);
        throw err;
    }
}


module.exports = { getBookings }