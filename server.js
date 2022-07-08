const express = require("express");
const { PORT } = require("./configs/server.config");
const mongoose = require("mongoose");
const { DB_URL } = require("./configs/db.config");
const User = require("./models/users.model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const init = async (req, res) => {
  try {
    const user = await User.findOne({ name: "admin" });
    if (user) {
      return;
    }
    const admin = await User.create({
      name: "admin",
      email: "admin@gmail.com",
      userType: "ADMIN",
      location: {
        type: "Pont",
        coordinates: [15.888, 80.255],
      },
    });
    console.log(admin);
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const start = async () => {
  await mongoose.connect(DB_URL);
  console.log("Connected to mongoDB");
  init();
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

start();
