const { sql, poolPromise } = require('../config/db');

const getService = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('ServiceID', sql.Int, data.ServiceID)
            .input('ServiceName', sql.VarChar(50), data.ServiceName)
            .input('price', sql.Decimal(10,2), data.price)
            .execute('[ser].extraServicesGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const getServiceOrders = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('ServiceOrderID', sql.Int, data.ServiceOrderID)
            .input('BookingID', sql.Int, data.BookingID)
            .input('ServiceID', sql.Int, data.ServiceID)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[ser].serviceOrdersGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

module.exports = { getService, getServiceOrders }