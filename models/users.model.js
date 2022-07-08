const mongoose = require("mongoose");
const { userTypes } = require("../utils/constants");
const locationSchema = require("./location.schema");

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
  //location is stored as an embedded schema
  location: {
    type: locationSchema,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
