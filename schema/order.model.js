const mongoose = require("mongoose");
const { order_status_enums } = require("../lib/config");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    order_total_amount: { type: Number, required: true },
    order_delivery_cost: { type: Number, required: true },
    order_status: {
      type: String,
      required: false,
      default: "PAUSED",
      enum: {
        values: order_status_enums,
        message: "{VALUE} is not among permitted values",
      },
    },
    mb_id: {type: Schema.Types.ObjectId, ref: "Member", required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
