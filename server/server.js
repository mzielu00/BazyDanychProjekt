// DB setup
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

//Express setup
var express = require("express");
var app = express();
const router = require("./routes");

app.use("/", router);

// The application is to listen on port number 3000
app.listen(3000, function () {
    console.log("The application is available on port 3000");
});
