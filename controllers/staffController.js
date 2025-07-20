const staffService = require("../services/staffService"); // Ensure correct path

// Controller to get staff details
const getStaff = async (req, res) => {
  try {
    // Extract query parameters
    const data = {
      APIKey: req.headers["apikey"],
      StaffID: req.query.StaffID ? parseInt(req.query.StaffID) : null,
      UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
      FirstName: req.query.FirstName || null,
      LastName: req.query.LastName || null,
      NIC: req.query.NIC || null,
      MobileNumber: req.query.MobileNumber || null,
      PositionID: req.query.PositionID ? parseInt(req.query.PositionID) : null,
      SalaryMin: req.query.SalaryMin ? parseFloat(req.query.SalaryMin) : null,
      SalaryMax: req.query.SalaryMax ? parseFloat(req.query.SalaryMax) : null,
      HiredDate: req.query.HiredDate || null,
      Status: req.query.Status || null,
    };

    // Call the service function
    const staff = await staffService.getStaff(data);

    if (staff.length === 0) {
      return res.status(404).json({ message: "No staff found" });
    }

    res.status(200).json(staff);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

// Controller to get staff positions
const getStaffPositions = async (req, res) => {
  try {
    // Extract query parameters
    const data = {
      APIKey: req.headers["apikey"],
      PositionID: req.query.PositionID ? parseInt(req.query.PositionID) : null,
      PositionName: req.query.PositionName || null,
    };

    // Call the service function
    const positions = await staffService.getStaffPositions(data);

    if (positions.length === 0) {
      return res.status(404).json({ message: "No staff positions found" });
    }

    res.status(200).json(positions);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const AddStaffPositions = async (req, res) => {
  try {
    // Extract data from request body
    const data = {
      APIKey: req.headers["apikey"],
      PositionID: req.body.PositionID ? parseInt(req.body.PositionID) : null,
      position_name: req.body.position_name,
    };

    // Call the service function to add a booking
    const result = await staffService.AddStaffPositions(data);

    res.status(200).json(result);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

module.exports = { getStaff, getStaffPositions, AddStaffPositions };
