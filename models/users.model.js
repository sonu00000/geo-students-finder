const mongoose = require("mongoose");
const { userTypes } = require("../utils/constants");
const locationSchema = require("../models/location.model");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    default: userTypes.student,
    enum: {
      values: [userTypes.student, userTypes.admin],
    },
  },
  //address is stored as an embedded schema
  address: {
    type: locationSchema,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
