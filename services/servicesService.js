const { sql, poolPromise } = require("../config/db");

const getService = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("ServiceID", sql.Int, data.ServiceID)
      .input("ServiceName", sql.VarChar(50), data.ServiceName)
      .input("price", sql.Decimal(10, 2), data.price)
      .execute("[ser].extraServicesGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getServiceOrders = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("ServiceOrderID", sql.Int, data.ServiceOrderID)
      .input("BookingID", sql.Int, data.BookingID)
      .input("ServiceID", sql.Int, data.ServiceID)
      .input("Status", sql.VarChar(20), data.Status)
      .execute("[ser].serviceOrdersGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const addServiceOrders = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("serviceOrderID", sql.Int, data.serviceOrderID)
      .input("bookingID", sql.Int, data.bookingID)
      .input("serviceID", sql.Int, data.serviceID)
      .input("order_date", sql.DateTime, data.order_date)
      .input("status", sql.VarChar(20), data.status)
      .input(
        "cancelled_reason",
        sql.VarChar(255),
        data.cancelled_reason || null
      )
      .input("staffID", sql.Int, data.staffID || null)
      .execute("[ser].serviceOrdersAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getServiceOrdersCount = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .execute("[ser].OrderCount");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const addService = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("serviceID", sql.Int, data.serviceID)
      .input("service_name", sql.VarChar(50), data.service_name)
      .input("description", sql.VarChar(255), data.description)
      .input("price", sql.Decimal(10, 2), data.price)
      .execute("[ser].extraServicesAddEdit");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const deleteService = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("serviceID", sql.Int, data.serviceID)
      .execute("[ser].deleteExtraService");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const changeOrderStatus = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("serviceOrderID", sql.Int, data.serviceOrderID)
      .input("status", sql.VarChar(20), data.status)
      .input("cancelled_reason", sql.VarChar(255), data.cancelled_reason || "")
      .execute("[ser].serviceOrders_ChangeStatus");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

module.exports = {
  getService,
  getServiceOrders,
  getServiceOrdersCount,
  addService,
  deleteService,
  addServiceOrders,
  changeOrderStatus,
};
