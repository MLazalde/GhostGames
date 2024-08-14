const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Product = model("Product", productSchema);
module.exports = Product;
