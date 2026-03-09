const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/positionSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };