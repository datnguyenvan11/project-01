var userController = require("../controller/userController.js");
var productController = require("../controller/productController.js");

exports.routing = function (app) {

    // Khu vực xử lý đăng ký và đăng nhập người dùng.
    app.get("/register", userController.generateRegisterForm);
    app.post("/register", userController.processRegister);
    app.get("/login", userController.generateLoginForm);
    app.post("/login", userController.processLogin);

    // Khu vực xử lý quản lý sản phẩm của admin.
    app.get("/admin/product/list", productController.listProduct);
    app.get("/admin/product/create", productController.generateProductForm);
    app.post("/admin/product/save", productController.saveProduct);
    // app.get("/admin/product/edit", function (req, res) {
    //     res.render("admin/product/edit.ejs");
    // });
    // app.get("/admin/product/update", function (req, res) {
    //     res.render("admin/product/edit.ejs");
    // });
    // app.get("/admin/product/delete", function (req, res) {
    //     res.render("admin/product/edit.ejs");
    // });
    //
    // // Khu vực xử lý quản lý danh mục sản phẩm của admin.
    // app.get("/admin/category/list", function (req, res) {
    //     res.render("admin/category/list.ejs");
    // });
    // app.get("/admin/category/create", function (req, res) {
    //     res.render("admin/category/form.ejs");
    // });
    // app.post("/admin/category/save", function (req, res) {
    //     res.render("admin/category/form.ejs");
    // });
    // app.get("/admin/category/edit", function (req, res) {
    //     res.render("admin/category/edit.ejs");
    // });
    // app.get("/admin/category/update", function (req, res) {
    //     res.render("admin/category/edit.ejs");
    // });
    // app.get("/admin/product/delete", function (req, res) {
    //     res.render("admin/category/edit.ejs");
    // });
}