const { sql, poolPromise } = require("../config/db");

const AddHotelNotes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("NoteID", sql.Int, data.NoteID)
      .input("Topic", sql.VarChar(50), data.Topic)
      .input("Note", sql.VarChar(sql.MAX), data.Note)
      .input("UserID", sql.Int, data.UserID)
      .execute("[note].hotelNotes_AddEdit");
    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getHotelNotes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("UserID", sql.Int, data.UserID)
      .execute("[note].hotelNotesGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddCustomerNotes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("NoteID", sql.Int, data.NoteID)
      .input("Topic", sql.VarChar(50), data.Topic)
      .input("Note", sql.VarChar(sql.MAX), data.Note)
      .input("CustomerID", sql.Int, data.CustomerID)
      .input("UserID", sql.Int, data.UserID)
      .execute("[note].customerNotes_AddEdit");
    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getCustomerNotes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("CustomerID", sql.Int, data.CustomerID)
      .input("UserID", sql.Int, data.UserID)
      .execute("[note].customerNotesGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const getBookingNotes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("UserID", sql.Int, data.UserID)
      .execute("[note].bookingNotesGet");

    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

const AddBookingNotes = async (data) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("APIKey", sql.VarChar(255), data.APIKey)
      .input("NoteID", sql.Int, data.NoteID)
      .input("Topic", sql.VarChar(50), data.Topic)
      .input("Note", sql.VarChar(sql.MAX), data.Note)
      .input("UserID", sql.Int, data.UserID)
      .execute("[note].BookingNotes_AddEdit");
    return result.recordset;
  } catch (err) {
    return { error: err.message || "An error occurred" };
  }
};

module.exports = {
  getHotelNotes,
  getCustomerNotes,
  getBookingNotes,
  AddHotelNotes,
  AddCustomerNotes,
  AddBookingNotes,
};
