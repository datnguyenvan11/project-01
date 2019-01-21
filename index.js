const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/mytable", {useNewUrlParser: true});
mongoose.connect("mongodb://sa:abcd1234@ds159641.mlab.com:59641/shoptify", {useNewUrlParser: true});

app.set("views", "pages");
app.set("views engine", "ejs");
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

// Tách phần xử lý chức năng routing ra một file bên ngoài.
var router = require("./router/applicationRouter.js");
router.routing(app);

app.listen(process.env.PORT || 5000, function () {
    console.log("Chay thanh cong");
});