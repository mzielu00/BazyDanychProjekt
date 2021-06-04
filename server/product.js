const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
});

const Product = mongoose.model("Product", ProductSchema);

function loadProduct(req, res, next) {
    if (req.params.productId) {
        Product.findOne({ id: req.params.productId }, function (err, product) {
            if (err) {
                next(new Error("Couldn't find product: " + err));
                return;
            }

            req.product = product;
            next();
        });
    } else {
        next();
    }
}

module.exports = { Product, loadProduct };
