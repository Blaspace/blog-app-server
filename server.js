const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/allRouter");
const app = express();
require("dotenv").config();

const uri = process.env.DBUIR;
app.use(cors());
mongoose.set("strictQuery", true);
mongoose.connect(uri, () => {
  app.listen(3500, () => console.log("listening"));
});
app.use(express.json());
app.use(router);
