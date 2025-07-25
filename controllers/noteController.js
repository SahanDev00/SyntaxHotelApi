const noteService = require("../services/noteService");

const AddHotelNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.body.NoteID ? parseInt(req.body.NoteID) : null,
      Topic: req.body.Topic,
      Note: req.body.Note,
      UserID: req.body.UserID ? parseInt(req.body.UserID) : null,
    };
    const result = await noteService.AddHotelNotes(data);

    res.status(200).json(result);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    }
  }
};

const getHotelNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.query.NoteID ? parseInt(req.query.NoteID) : null,
      UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
    };

    const notes = await noteService.getHotelNotes(data);

    if (notes.length === 0) {
      return res.status(404).json({ message: "No Hotel Notes found" });
    }

    res.status(200).json(notes);
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

const AddCustomerNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.body.NoteID ? parseInt(req.body.NoteID) : null,
      Topic: req.body.Topic,
      Note: req.body.Note,
      CustomerID: req.body.CustomerID ? parseInt(req.body.CustomerID) : null,
      UserID: req.body.UserID ? parseInt(req.body.UserID) : null,
    };
    const result = await noteService.AddCustomerNotes(data);

    res.status(200).json(result);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    }
  }
};

const getCustomerNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      CustomerID: req.query.CustomerID ? parseInt(req.query.CustomerID) : null,
      NoteID: req.query.NoteID ? parseInt(req.query.NoteID) : null,
      UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
    };

    const notes = await noteService.getCustomerNotes(data);

    if (notes.length === 0) {
      return res.status(404).json({ message: "No Customer Notes found" });
    }

    res.status(200).json(notes);
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

const getBookingNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.query.NoteID ? parseInt(req.query.NoteID) : null,
      UserID: req.query.UserID ? parseInt(req.query.UserID) : null,
    };

    const notes = await noteService.getBookingNotes(data);

    if (notes.length === 0) {
      return res.status(404).json({ message: "No Booking Notes found" });
    }

    res.status(200).json(notes);
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

const AddBookingNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.body.NoteID ? parseInt(req.body.NoteID) : null,
      Topic: req.body.Topic,
      Note: req.body.Note,
      UserID: req.body.UserID ? parseInt(req.body.UserID) : null,
    };

    const result = await noteService.AddBookingNotes(data);

    res.status(200).json(result);
  } catch (err) {
    // Check if the error is from SQL (or from the stored procedure)
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    }
  }
};

const deleteHotelNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.body.NoteID,
    };

    const note = await noteService.deleteHotelNotes(data);

    res.status(200).json(note);
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

const deleteBookingNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.body.NoteID,
    };

    const note = await noteService.deleteBookingNotes(data);

    res.status(200).json(note);
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

const deleteCustomerNotes = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      NoteID: req.body.NoteID,
    };

    const note = await noteService.deleteCustomerNotes(data);

    res.status(200).json(note);
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

module.exports = {
  getHotelNotes,
  getCustomerNotes,
  getBookingNotes,
  AddHotelNotes,
  AddCustomerNotes,
  AddBookingNotes,
  deleteBookingNotes,
  deleteHotelNotes,
  deleteCustomerNotes,
};
