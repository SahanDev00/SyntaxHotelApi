const { sql, poolPromise } = require('../config/db');

const getCustomers = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('CustomerCategoryID', sql.Int, data.CustomerCategoryID)
            .input('FullName', sql.VarChar(100), data.FullName)
            .input('Phone', sql.VarChar(15), data.Phone)
            .input('Email', sql.VarChar(100), data.Email)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[cus].customersGet');

            return result.recordset;
    } catch (err) {
        console.error("Error in hotelService:", err);
        throw err;
    }
}

const getCustomerCategory = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('CategoryID', sql.Int, data.CategoryID)
            .input('CategoryName', sql.VarChar(100), data.CategoryName)
            .input('AdditionalFeeRate', sql.VarChar(100), data.AdditionalFeeRate)
            .input('AdditionalFeeAmount', sql.VarChar(100), data.AdditionalFeeAmount)
            .execute('[cus].CustomerCategoryGet');

            return result.recordset;
    } catch (err) {
        console.error("Error in hotelService:", err);
        throw err;
    }
}
module.exports = { getCustomers, getCustomerCategory }