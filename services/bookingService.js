const { sql, poolPromise } = require('../config/db');

const getBookings = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('BookingID', sql.Int, data.BookingID)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('RoomID', sql.Int, data.RoomID)
            .input('TableID', sql.Int, data.TableID)
            .input('BookingStatus', sql.VarChar(20), data.BookingStatus)
            .input('PaidStatus', sql.VarChar(20), data.PaidStatus)
            .input('CheckInDate', sql.Date, data.CheckInDate)
            .input('CheckOutDate', sql.Date, data.CheckOutDate)
            .execute('[boo].bookingsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetPendingPaymentsCount = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[pay].PendingPaymentsCount');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetUpcomingReservations = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .execute('[charts].upcomingReservationsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetTotalPrice = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('roomID', sql.Int, data.roomID)
            .input('TableID', sql.Int, data.TableID)
            .input('CheckInDate', sql.Date, data.CheckInDate)
            .input('CheckOutDate', sql.Date, data.CheckOutDate)
            .execute('[boo].bookingsGetPrice');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetRoomBookings = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('BookingID', sql.Int, data.BookingID)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('RoomID', sql.Int, data.RoomID)
            .input('BookingStatus', sql.VarChar(20), data.BookingStatus)
            .input('PaidStatus', sql.VarChar(20), data.PaidStatus)
            .input('CheckInDate', sql.Date, data.CheckInDate)
            .input('CheckOutDate', sql.Date, data.CheckOutDate)
            .execute('[boo].roomBookingsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const GetTableBookings = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('BookingID', sql.Int, data.BookingID)
            .input('CustomerID', sql.Int, data.CustomerID)
            .input('TableID', sql.Int, data.TableID)
            .input('BookingStatus', sql.VarChar(20), data.BookingStatus)
            .input('PaidStatus', sql.VarChar(20), data.PaidStatus)
            .input('CheckInDate', sql.Date, data.CheckInDate)
            .input('CheckOutDate', sql.Date, data.CheckOutDate)
            .execute('[boo].tableBookingsGet');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const AddRoomBooking = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('bookingID', sql.Int, data.BookingID)
            .input('customerID', sql.Int, data.CustomerID)
            .input('roomID', sql.Int, data.roomID)
            .input('check_in_date', sql.Date, data.CheckInDate)
            .input('check_out_date', sql.Date, data.CheckOutDate)
            .input('booking_status', sql.VarChar(20), data.BookingStatus)
            .input('total_price', sql.Decimal(10, 2), data.TotalPrice)
            .input('paid_status', sql.VarChar(20), data.PaidStatus)
            .input('paid_price', sql.Decimal(10, 2), data.PaidPrice)
            .input('StaffID', sql.Int, data.StaffID)
            .input('payment_method', sql.VarChar(20), data.PaymentMethod)
            .execute('[boo].bookingsAddEdit');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}

const AddTableBooking = async (data) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('APIKey', sql.VarChar(255), data.APIKey)
            .input('bookingID', sql.Int, data.BookingID)
            .input('customerID', sql.Int, data.CustomerID)
            .input('tableID', sql.Int, data.tableID)
            .input('check_in_date', sql.Date, data.CheckInDate)
            .input('check_out_date', sql.Date, data.CheckOutDate)
            .input('booking_status', sql.VarChar(20), data.BookingStatus)
            .input('total_price', sql.Decimal(10, 2), data.TotalPrice)
            .input('paid_status', sql.VarChar(20), data.PaidStatus)
            .input('paid_price', sql.Decimal(10, 2), data.PaidPrice)
            .input('staffID', sql.Int, data.StaffID)
            .input('payment_method', sql.VarChar(20), data.PaymentMethod)
            .execute('[boo].bookingsAddEdit');

            return result.recordset;
    } catch (err) {
        return { error: err.message || 'An error occurred' };
    }
}
module.exports = { getBookings, GetPendingPaymentsCount, GetUpcomingReservations, GetRoomBookings, GetTableBookings, AddRoomBooking, GetTotalPrice, AddTableBooking }