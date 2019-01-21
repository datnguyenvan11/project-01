const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    thumbnail: {type: String}
});
var Product = mongoose.model("Product", ProductSchema);

exports.generateProductForm = function (req, res) {
    res.render("admin/product/form.ejs");
}

exports.saveProduct = function (req, res) {
    var product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        thumbnail: req.body.thumbnail
    });
    // Kiểm tra dữ liệu và lưu vào cơ sở dữ liệu.
    product.save();
    res.send("Lưu sản phẩm thành công.");
}

exports.listProduct = function (req, res) {
    Product.find({}, function (err, products) {
        res.render("admin/product/list.ejs", {
            "list": products
        });
    });
}