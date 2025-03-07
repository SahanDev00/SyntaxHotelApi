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
        return { error: err.message || 'An error occurred' };
    }
}

const GetPendingPaymentsCount = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[pay].PendingPaymentsCount');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetUpcomingReservations = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[charts].upcomingReservationsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetRoomBookings = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('BookingID', sql.Int, data.BookingID)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('RoomID', sql.Int, data.RoomID)
            .input('BookingStatus', sql.VarChar(20), data.BookingStatus)
            .input('PaidStatus', sql.VarChar(20), data.PaidStatus)
            .input('CheckInDate', sql.Date, data.CheckInDate)
            .input('CheckOutDate', sql.Date, data.CheckOutDate)
            .execute('[boo].roomBookingsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetTableBookings = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('BookingID', sql.Int, data.BookingID)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('TableID', sql.Int, data.TableID)
            .input('BookingStatus', sql.VarChar(20), data.BookingStatus)
            .input('PaidStatus', sql.VarChar(20), data.PaidStatus)
            .input('CheckInDate', sql.Date, data.CheckInDate)
            .input('CheckOutDate', sql.Date, data.CheckOutDate)
            .execute('[boo].tableBookingsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

module.exports = { getBookings, GetPendingPaymentsCount, GetUpcomingReservations, GetRoomBookings, GetTableBookings }