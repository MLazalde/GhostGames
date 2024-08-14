// user: {
//   type: Schema.Types.ObjectId,
//   ref: "User",
//   required: true,
// },
const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  cost: {
    type: Number,
    default: 0,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Cart = model("Cart", cartSchema);
module.exports = Cart;
