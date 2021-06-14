const router = require("express").Router();
const { Product, addProduct } = require("../models/product");

router.get("/", (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.error(err);
            res.send(handleError(err));
        } else {
            res.send(products);
        }
    });
});

router.post("/", (req, res) => {
    addProduct(
        req.body.name,
        req.body.category,
        req.body.calories,
        req.body.proteins,
        req.body.carbohydrates,
        req.body.fats
    );
});

router.get("/:name", (req, res) => {
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
