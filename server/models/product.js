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

function deleteProduct(prodName)
{
    Product.deleteOne({name: prodName}, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
    });
}

module.exports = { Product, loadProduct, addProduct, deleteProduct };
