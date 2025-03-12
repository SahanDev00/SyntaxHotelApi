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
        return { error: err.message || 'An error occurred' };
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
        return { error: err.message || 'An error occurred' };
    }
}

const getCustomerCount = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[cus].CustomerCount');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const getCustomerByBookingID = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('BookingID', sql.Int, data.BookingID)
            .execute('[cus].CustomerByBookingIDGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const AddEditCustomer = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('CustomerID', sql.Int, data.CustomerID || null) // If null, it's an Add
            .input('customer_categoryID', sql.Int, data.customer_categoryID)
            .input('full_name', sql.VarChar(100), data.full_name)
            .input('phone', sql.VarChar(15), data.phone)
            .input('email', sql.VarChar(100), data.email)
            .input('address', sql.Text, data.address)
            .input('status', sql.VarChar(20), data.status || 'Active')
            .input('banned_reason', sql.Text, data.banned_reason || null)
            .execute('[cus].customersAddEdit');

        return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
};

module.exports = { getCustomers, getCustomerCategory, getCustomerCount, getCustomerByBookingID, AddEditCustomer }