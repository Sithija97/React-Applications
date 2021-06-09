const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/Codecamp";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true })
  .then(() => {
    console.log("DB connceted successfully");
  })
  .catch((err) => {
    console.log("err: " + err);
  });

  app.listen(5000, () => {
    console.log("Server connected to port 5000");
  });