const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  locationType: {
    type: String,
    default: "Point",
    enum: {
      values: ["Point"],
    },
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

module.exports = locationSchema;
