var express = require("express");
//var path = require("path");

var app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/caloriecalculatordb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to database");
});

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  calories: Number,
  proteins: Number,
  carbohydrates: Number,
  fats: Number,
});

const product = mongoose.model("product", productSchema);

// The application is to listen on port number 3000
app.listen(3000, function () {
  console.log("The application is available on port 3000");
});

app.get("/", (req, res) => {
  res.send("<h1>GR GR GR</h1>");
});
