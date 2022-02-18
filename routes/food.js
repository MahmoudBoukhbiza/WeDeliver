const express = require("express");
const router = express.Router();
const foodControllers = require("../controllers/food");

//post food
router.post("/food", foodControllers.postFood);

//get all food
router.get("/food", foodControllers.getFood);

//get food by id
router.get("/food/:id", foodControllers.getFoodById);

//delete food
router.delete("/food/:id", foodControllers.deleteFood);

//update food
router.put("/food/:id", foodControllers.updateFood);

module.exports = router;
