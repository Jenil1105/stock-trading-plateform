const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/orderSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };