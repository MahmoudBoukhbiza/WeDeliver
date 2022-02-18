const mongoose = require("mongoose");
const schema = mongoose.Schema;
const foodSchema = new schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  postedBy: {
    type: String,
  },
  ingredient: {
    type: String,
  },
});

module.exports = mongoose.model("food", foodSchema);
