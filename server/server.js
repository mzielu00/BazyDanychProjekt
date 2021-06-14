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
const productRouter = require("./routes/products");
const userRouter = require("./routes/auth");
const logger = require("morgan");
const cors = require("cors");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>GR GR GR</h1>");
});
app.use("/products", productRouter);
app.use("/auth", userRouter);

// The application is to listen on port number 3000
app.listen(3000, function () {
    console.log("The application is available on port 3000");
});
