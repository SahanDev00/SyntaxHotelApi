const express = require("express");
const router = express.Router();
const servicesController = require("../controllers/servicesController");

router.get("/services", servicesController.getService);
router.post("/services/addedit", servicesController.addService);
router.get("/count", servicesController.getServiceOrdersCount);
router.get("/orders", servicesController.getServiceOrders);
router.post("/orders/addedit", servicesController.addServiceOrders);
router.post("/orders/statuschange", servicesController.changeOrderStatus);
router.delete("/services/delete", servicesController.deleteService);

module.exports = router;
