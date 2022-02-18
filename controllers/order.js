const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const Order = require("../models/Order");

//post order
// @POST method
// @desc post an order
// @path : http://localhost:5000/wedeliver/order
// Params Body
exports.postOrder = async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      const response = await newOrder.save();
      res.status(200).send({ response: response, message: "order saved" });
    } catch (error) {
      res.status(500).send({ message: "cannot save" });
      console.log(error);
    }
  };

//get all orders
// @GET method
// @desc get a food
// @path : http://localhost:5000/wedeliver/order
exports.getOrder = async (req, res) => {
    try {
      const result = await Order.find();
      res
        .status(200)
        .send({ result: result, message: "getting order successfully" });
    } catch (error) {
      res.status(500).send({ message: "cannot get order" });
    }
  };

//get order by id
// @GET method
// @desc get one order
// @path : http://localhost:5000/wedeliver/order/:id
// Params Body
exports.getOrderById = async (req, res) => {
    try {
      const result = await Order.findOne({ _id: req.params.id });
      res
        .status(200)
        .send({ result: result, message: "getting order successfully" });
    } catch (error) {
      res.status(500).send({ message: "cannot get the order" });
    }
  };

//update order
// @UPDATE method
// @desc update an order
// @path : http://localhost:5000/wedeliver/order/:id
// Params Body
exports.updateOrder = async (req, res) => {
    try {
      const result = await Order.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.status(200).send({ response: result, message: "Order updated" });
    } catch (error) {
      res.status(500).send({ message: "cannot update the order" });
    }
  };

//delete order
// @DELETE method
// @desc delete an order
// @path : http://localhost:5000/wedeliver/order/:id
// Params Body
exports.deleteOrder = async (req, res) => {
    try {
      const result = await Order.findOneAndRemove({ _id: req.params.id });
      res.status(200).send({ message: "Order deleted" });
    } catch (error) {
      res.status(500).send({ message: "cannot delete the order" });
    }
  };
