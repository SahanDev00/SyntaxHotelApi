const { sql, poolPromise } = require('../config/db');

const getHotelNotes = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('UserID', sql.Int, data.UserID)
            .execute('[note].bookingNotesGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const getCustomerNotes = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('UserID', sql.Int, data.UserID)
            .execute('[note].customerNotesGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const getBookingNotes = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('UserID', sql.Int, data.UserID)
            .execute('[note].bookingNotesGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

module.exports = { getHotelNotes, getCustomerNotes, getBookingNotes }