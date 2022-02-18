const express = require("express");
const router = express.Router();
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const userControllers = require("../controllers/auth");
const isAuth = require("../middleware/passportAuth");

//register
router.post(
  "/register",
  registerRules(),
  validation,
  userControllers.registerUser
);

//login
router.post("/login", loginRules(), validation, userControllers.userLogin);

//get auth user
router.get("/current",isAuth(), userControllers.currentUser);

module.exports = router;
