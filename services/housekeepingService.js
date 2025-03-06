const { sql, poolPromise } = require('../config/db');

const getHousekeeping = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('HousekeepingID', sql.Int, data.HousekeepingID)
            .input('RoomID', sql.Int, data.RoomID)
            .input('StaffID', sql.Int, data.StaffID)
            .input('CleaningDate', sql.Date, data.CleaningDate)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[hs].housekeepingGet');

        return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

module.exports = { getHousekeeping };
