const { sql, poolPromise } = require('../config/db');

const getInvoices = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('InvoiceID', sql.Int, data.InvoiceID)
            .input('BookingID', sql.Int, data.BookingID)
            .input('MinAmount', sql.Decimal(10,2), data.MinAmount)
            .input('MaxAmount', sql.Decimal(10,2), data.MaxAmount)
            .input('InvoiceDate', sql.Date, data.InvoiceDate)
            .execute('[inv].invoicesGet');

        return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

const getUsers = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('UserID', sql.Int, data.UserID)
            .input('Username', sql.VarChar(50), data.Username)
            .input('Role', sql.VarChar(20), data.Role)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[user].usersGet');

        return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

const getRoles = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('RoleName', sql.VarChar(20), data.RoleName)
            .execute('[user].rolesGet');

        return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

module.exports = { getInvoices, getUsers, getRoles };
