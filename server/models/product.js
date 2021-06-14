const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
    isSet: { type: Boolean, default: false },
    products: [String],
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

function addSet(
    name,
    category,
    calories,
    proteins,
    carbohydrates,
    fats,
    products
) {
    const newRecord = new Product({
        name: name,
        category: category,
        calories: calories,
        proteins: proteins,
        carbohydrates: carbohydrates,
        fats: fats,
        isSet: true,
        products: products,
    });
    newRecord.save((e) => {
        if (e) console.error(e);
        else console.log("new set added successfully");
    });
}
//addSet("set", "set", 4312, 43, 32, 2, ["jajeczniczka", "burgerek"]);

function deleteProduct(prodName) {
    console.log(prodName);
    Product.deleteOne({ name: prodName }, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
}

module.exports = { Product, loadProduct, addProduct, deleteProduct, addSet };
