var Category = require("../models/category.js");

exports.generateForm = function (req, res) {
    res.render("admin/category/form.ejs");
}

exports.save = function (req, res) {
    var category = new Category({
        name: req.body.name,
        description: req.body.description,
        thumbnail: req.body.thumbnail
    });
    category.save();
    res.send("Lưu category thành công.");
}

exports.list = function (req, res) {
    Category.find({}, function (err, products) {
        res.render("admin/category/list.ejs", {
            "list": products
        });
    });
}