const serviceService = require("../services/servicesService"); // Ensure correct path

// Controller to get services
const getService = async (req, res) => {
  try {
    // Extract query parameters
    const data = {
      APIKey: req.headers["apikey"], // Get API key from env
      ServiceID: req.query.ServiceID ? parseInt(req.query.ServiceID) : null,
      ServiceName: req.query.ServiceName || null,
      price: req.query.price ? parseFloat(req.query.price) : null,
    };

    // Call the service function
    const services = await serviceService.getService(data);

    if (services.length === 0) {
      return res.status(404).json({ message: "No services found" });
    }

    res.status(200).json(services);
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

// Controller to get service orders
const getServiceOrders = async (req, res) => {
  try {
    // Extract query parameters
    const data = {
      APIKey: req.headers["apikey"],
      ServiceOrderID: req.query.ServiceOrderID
        ? parseInt(req.query.ServiceOrderID)
        : null,
      BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
      ServiceID: req.query.ServiceID ? parseInt(req.query.ServiceID) : null,
      Status: req.query.Status || null,
    };

    // Call the service function
    const serviceOrders = await serviceService.getServiceOrders(data);

    if (serviceOrders.length === 0) {
      return res.status(404).json({ message: "No service orders found" });
    }

    res.status(200).json(serviceOrders);
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

// Controller to get service orders count
const getServiceOrdersCount = async (req, res) => {
  try {
    // Extract query parameters
    const data = {
      APIKey: req.headers["apikey"],
      ServiceOrderID: req.query.ServiceOrderID
        ? parseInt(req.query.ServiceOrderID)
        : null,
      BookingID: req.query.BookingID ? parseInt(req.query.BookingID) : null,
      ServiceID: req.query.ServiceID ? parseInt(req.query.ServiceID) : null,
      Status: req.query.Status || null,
    };

    // Call the service function
    const serviceOrdersCount = await serviceService.getServiceOrdersCount(data);

    res.status(200).json(serviceOrdersCount);
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

const addService = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      serviceID: req.body.serviceID ? parseInt(req.body.serviceID) : null,
      service_name: req.body.service_name || null,
      description: req.body.description || null,
      price: req.body.price ? parseFloat(req.body.price) : null,
    };

    const result = await serviceService.addService(data);

    res.status(201).json(result);
  } catch (err) {
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const deleteService = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      serviceID: req.body.serviceID,
    };

    const result = await serviceService.deleteService(data);

    res.status(201).json(result);
  } catch (err) {
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const addServiceOrders = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      serviceOrderID: req.body.serviceOrderID
        ? parseInt(req.body.serviceOrderID)
        : null,
      bookingID: req.body.bookingID ? parseInt(req.body.bookingID) : null,
      serviceID: req.body.serviceID ? parseInt(req.body.serviceID) : null,
      order_date: req.body.order_date || null,
      status: req.body.status || "Requested",
      cancelled_reason: req.body.cancelled_reason || null,
      staffID: req.body.staffID ? parseInt(req.body.staffID) : null,
    };

    const result = await serviceService.addServiceOrders(data);

    res.status(201).json(result);
  } catch (err) {
    if (err.originalError) {
      const sqlErrorMessage =
        err.originalError.message || "An unknown error occurred";
      return res.status(500).json({ error: sqlErrorMessage });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const changeOrderStatus = async (req, res) => {
  try {
    const data = {
      APIKey: req.headers["apikey"],
      serviceOrderID: req.body.serviceOrderID
        ? parseInt(req.body.serviceOrderID)
        : null,
      status: req.body.status || "Requested",
      cancelled_reason: req.body.cancelled_reason || "",
    };

    const result = await serviceService.changeOrderStatus(data);

    res.status(200).json(result);
  } catch (err) {
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
  getService,
  getServiceOrders,
  getServiceOrdersCount,
  addService,
  deleteService,
  addServiceOrders,
  changeOrderStatus,
};
