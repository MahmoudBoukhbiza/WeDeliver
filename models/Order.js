const mongoose = require("mongoose");
const schema = mongoose.Schema;
const orderSchema = new schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  postedBy: {
    type: String,
  },
  ingredient: {
    type: String,
  },
  ordredBy: {
    type: String,
  },
});

module.exports = mongoose.model("order", orderSchema);
