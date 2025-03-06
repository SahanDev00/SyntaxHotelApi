const { sql, poolPromise } = require('../config/db');

const getStaff = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('StaffID', sql.Int, data.StaffID)
            .input('UserID', sql.Int, data.UserID)
            .input('FirstName', sql.VarChar(50), data.FirstName)
            .input('LastName', sql.VarChar(50), data.LastName)
            .input('NIC', sql.VarChar(50), data.NIC)
            .input('MobileNumber', sql.VarChar(50), data.MobileNumber)
            .input('PositionID', sql.Int, data.PositionID)
            .input('SalaryMin', sql.Decimal(10,2), data.SalaryMin)
            .input('SalaryMax', sql.Decimal(10,2), data.SalaryMax)
            .input('HiredDate', sql.Date, data.HiredDate)
            .input('Status', sql.VarChar(20), data.Status)
            .execute('[st].staffGet');

            return result.recordset;
    } catch (err) {
        console.error("Error in staffService:", err);
        throw err;
    }
}

const getStaffPositions = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('PositionID', sql.Int, data.PositionID)
            .input('PositionName', sql.VarChar(100), data.PositionName)
            .execute('[st].staffPositionsGet');

            return result.recordset;
    } catch (err) {
        console.error("Error in staffService:", err);
        throw err;
    }
}

module.exports = { getStaff, getStaffPositions }