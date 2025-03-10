
const { sql, poolPromise } = require('../config/db');

const getPayments = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('PaymentID', sql.Int, data.PaymentID)
            .input('BookingID', sql.Int, data.BookingID)
            .input('MinAmount', sql.Decimal(10,2), data.MinAmount)
            .input('MaxAmount', sql.Decimal(10,2), data.MaxAmount)
            .input('PaymentMethod', sql.VarChar(20), data.PaymentMethod)
            .input('Status', sql.VarChar(20), data.Status)
            .input('PaymentDate', sql.Date, data.PaymentDate)
            .execute('[pay].[paymentsGet]');

        return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

module.exports = { getPayments };
