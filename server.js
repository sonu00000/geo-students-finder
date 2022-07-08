const express = require("express");
const { PORT } = require("./configs/server.config");
const mongoose = require("mongoose");
const { DB_URL } = require("./configs/db.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
  await mongoose.connect(DB_URL);
  console.log("Connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

start();
