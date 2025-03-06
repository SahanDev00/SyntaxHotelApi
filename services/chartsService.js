const { sql, poolPromise } = require('../config/db');

const getMonthlySales = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[charts].monthlySalesGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const getCustomerGrowth = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[charts].customerGrowthGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const getUpcomingEvents = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[charts].upcomingEventsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const getEvents = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[charts].eventsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

module.exports = { getMonthlySales, getCustomerGrowth, getUpcomingEvents, getEvents }