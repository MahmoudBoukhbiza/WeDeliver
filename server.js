console.clear();
const express = require("express");
const connectDB = require("./config/dbConnect");
require("dotenv").config();
const app = express();

//conect to DB
connectDB();

//routes
app.use(express.json());
app.use("/wedeliver", require("./routes/user"));
app.use("/wedeliver", require("./routes/food"));
app.use("/wedeliver", require("./routes/order"));

//server
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`SERVER IS RUNNIG ON ${PORT}`)
);
