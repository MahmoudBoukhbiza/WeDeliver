const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.log("DATABASE IS NOT CONNECTED");
    console.log(error);
  }
};

module.exports = connectDB;
