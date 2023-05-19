const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/allRouter");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

//const uri = process.env.DBUIR;
const uri = "mongodb://localhost:27017/todo-list";
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
mongoose.set("strictQuery", true);
mongoose.connect(uri, () => {
  app.listen(3500, () => console.log(`listening`));
});
app.use(express.json());
app.use(router);
