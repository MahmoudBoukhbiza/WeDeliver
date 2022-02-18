const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/order");

//post order
router.post("/order", orderControllers.postOrder);

//get all order
router.get("/order", orderControllers.getOrder);

//get order by id
router.get("/order/:id", orderControllers.getOrderById);

//delete order
router.delete("/order/:id", orderControllers.deleteOrder);

//update order
router.put("/order/:id", orderControllers.updateOrder);

module.exports = router;
