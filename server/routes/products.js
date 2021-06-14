const router = require("express").Router();
const {
    Product,
    addProduct,
    addSet,
    deleteProduct,
} = require("../models/product");

router.get("/", (req, res) => {
    console.log;
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
    if (req.body.isSet) {
        addSet(
            req.body.name,
            req.body.category,
            req.body.calories,
            req.body.proteins,
            req.body.carbohydrates,
            req.body.fats,
            req.body.products,
            req.body.user
        );
    } else {
        addProduct(
            req.body.name,
            req.body.category,
            req.body.calories,
            req.body.proteins,
            req.body.carbohydrates,
            req.body.fats
        );
    }
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

router.delete("/:name", (req, res) => {
    console.log(req.params.name);
    deleteProduct(req.params.name);
});

module.exports = router;
