const mongoose = require("mongoose");

const mugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Mug", mugSchema);
