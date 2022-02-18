const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const Food = require("../models/Food");

//post food
// @POST method
// @desc post a food
// @path : http://localhost:5000/wedeliver/food
// Params Body
exports.postFood = async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const response = await newFood.save();
    res.status(200).send({ response: response, message: "food saved" });
  } catch (error) {
    res.status(500).send({ message: "cannot save" });
    console.log(error);
  }
};

//get all food
// @GET method
// @desc get a food
// @path : http://localhost:5000/wedeliver/food
exports.getFood = async (req, res) => {
  try {
    const result = await Food.find();
    res
      .status(200)
      .send({ result: result, message: "getting food successfully" });
  } catch (error) {
    res.status(500).send({ message: "cannot get foood" });
  }
};

//get food by id
// @GET method
// @desc get one food
// @path : http://localhost:5000/wedeliver/food/:id
// Params Body
exports.getFoodById = async (req, res) => {
  try {
    const result = await Food.findOne({ _id: req.params.id });
    res
      .status(200)
      .send({ result: result, message: "getting food successfully" });
  } catch (error) {
    res.status(500).send({ message: "cannot get the order" });
  }
};

//delete food by id
// @DELETE method
// @desc delete a food
// @path : http://localhost:5000/wedeliver/food/:id
// Params Body
exports.deleteFood = async (req, res) => {
  try {
    const result = await Food.findOneAndRemove({ _id: req.params.id });
    res.status(200).send({ message: "food deleted" });
  } catch (error) {
    res.status(500).send({ message: "cannot delete the food" });
  }
};

//update food by id
// @UPDATE method
// @desc update a food
// @path : http://localhost:5000/wedeliver/food/:id
// Params Body
exports.updateFood = async (req, res) => {
  try {
    const result = await Food.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ response: result, message: "food updated" });
  } catch (error) {
    res.status(500).send({ message: "cannot update the order" });
  }
};
