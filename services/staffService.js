const { sql, poolPromise } = require("../config/db");

const getStaff = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("StaffID", sql.Int, data.StaffID)
      .input("UserID", sql.Int, data.UserID)
      .input("FirstName", sql.VarChar(50), data.FirstName)
      .input("LastName", sql.VarChar(50), data.LastName)
      .input("NIC", sql.VarChar(50), data.NIC)
      .input("MobileNumber", sql.VarChar(50), data.MobileNumber)
      .input("PositionID", sql.Int, data.PositionID)
      .input("SalaryMin", sql.Decimal(10, 2), data.SalaryMin)
      .input("SalaryMax", sql.Decimal(10, 2), data.SalaryMax)
      .input("HiredDate", sql.Date, data.HiredDate)
      .input("Status", sql.VarChar(20), data.Status)
      .execute("[st].staffGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getStaffPositions = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("PositionID", sql.Int, data.PositionID)
      .input("PositionName", sql.VarChar(100), data.PositionName)
      .execute("[st].staffPositionsGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddStaff = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("staffID", sql.Int, data.staffID)
      .input("firstName", sql.VarChar(100), data.firstName)
      .input("lastName", sql.VarChar(100), data.lastName)
      .input("NIC", sql.VarChar(50), data.NIC)
      .input("mobileNumber", sql.Int, data.mobileNumber)
      .input("positionID", sql.Int, data.positionID)
      .input("salary", sql.Float, data.salary)
      .input("hiredDate", sql.DateTime, data.hiredDate)
      .input("status", sql.VarChar(20), data.status)
      .execute("[st].staffAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddStaffPositions = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("positionID", sql.Int, data.PositionID)
      .input("position_name", sql.VarChar(100), data.position_name)
      .execute("[st].staffPositionAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const deleteStaffPositions = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("positionID", sql.Int, data.positionID)
      .execute("[st].deleteStaffPosition");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

module.exports = {
  getStaff,
  getStaffPositions,
  AddStaffPositions,
  AddStaff,
  deleteStaffPositions,
};
