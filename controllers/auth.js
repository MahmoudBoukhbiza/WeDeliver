const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const user = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register user
exports.registerUser = async (req, res) => {
  const { name, lastName, email, password, isAdmin } = req.body;

  try {
    const newUser = new user({ name, lastName, email, password, isAdmin });
    //check mail
    const searchedUser = await user.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ message: "email already exist" });
    }
    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;
    const newUserToken = await newUser.save();
    //generate a token
    const payload = {
      _id: newUserToken.id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey);
    res
      .status(200)
      .send({ newUserToken, message: "user saved", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ message: "can not save user" });
    console.log(error);
  }
};

//login user
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if user exist
    const searchedUser = await user.findOne({ email });
    //find if email not exist
    if (!searchedUser) {
      return res.status(400).send({ message: "bad credantial" });
    }
    //password checkin
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ message: "bad credantial" });
    }
    //create a token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey,);
    //send the user
    res.status(200).send({
      user: searchedUser,
      message: "success",
      token: `bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send({ message: "can not login" });
  }
};

//get current user
exports.currentUser = async (req, res) => {
  res.status(200).send({ user: req.user });
};
