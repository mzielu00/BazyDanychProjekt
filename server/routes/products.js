const router = require("express").Router();
const { Product, addProduct } = require("../models/product");

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

router.post("/products", (req, res) => {
    addProduct(
        req.body.name,
        req.body.category,
        req.body.calories,
        req.body.proteins,
        req.body.carbohydrates,
        req.body.fats
    );
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
