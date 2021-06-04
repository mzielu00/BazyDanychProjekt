var express = require("express");
//var path = require("path");

var app = express();

const { Product } = require("./models/product");

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

function addProduct(name, category, calories, proteins, carbohydrates, fats) {
    const newRecord = new Product({
        name: name,
        category: category,
        calories: calories,
        proteins: proteins,
        carbohydrates: carbohydrates,
        fats: fats,
    });
    newRecord.save((e) => {
        if (e) console.error(e);
        else console.log("new record added successfully");
    });
}
//addProduct("jajeczniczka", "obiadek", 4312, 43, 32, 2);

app.get("/", (req, res) => {
    res.send("<h1>GR GR GR</h1>");
});

app.get("/products", (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.error(err);
            res.send(handleError(err));
        } else {
            res.send(products);
        }
    });
});

app.get("/products/:name", (req, res) => {
    Product.find({ name: req.params.name }, (err, products) => {
        if (err) {
            console.error(err);
            res.send(handleError(err));
        } else {
            res.send(products);
        }
    });
});
// The application is to listen on port number 3000
app.listen(3000, function () {
    console.log("The application is available on port 3000");
});
