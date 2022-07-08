const express = require("express");
const { PORT } = require("./configs/server.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

start();
