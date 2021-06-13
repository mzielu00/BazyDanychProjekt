const router = require("express").Router();
const { Product } = require("../models/product");

router.get("/", (req, res) => {
    res.send("<h1>GR GR GR</h1>");
});

router.get("/products", (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.error(err);
            res.send(handleError(err));
        } else {
            res.send(products);
        }
    });
});

router.get("/products/:name", (req, res) => {
    Product.find({ name: req.params.name }, (err, products) => {
        if (err) {
            console.error(err);
            res.send(handleError(err));
        } else {
            res.send(products);
        }
    });
});

module.exports = router;
