var listUser = [];

exports.processRegister = function (req, res) {
    var user = {
        "fullName": req.body.fullName,
        "username": req.body.username,
        "password": req.body.password
    };
    // Kiểm tra dữ liệu và lưu vào cơ sở dữ liệu.
    listUser.push(user);
    res.render("client/register-success.ejs", {
        "user": user
    });
};

exports.generateRegisterForm = function (req, res) {
    res.render("client/register.ejs");
};

exports.generateLoginForm = function (req, res) {
    res.render("client/login.ejs");
};

exports.processLogin = function (req, res) {
    var user = {
        "username": req.body.username,
        "password": req.body.password
    };
    var loginSuccess = false;
    for (var i = 0; i < listUser.length; i++) {
        var tempUser = listUser[i];
        if (tempUser.username == user.username && tempUser.password == user.password) {
            loginSuccess = true;
            break;
        }
    }
    if (loginSuccess) {
        res.send("Login thành công với tài khoản " + user.username);
    } else {
        res.send("Sai thông tin tài khoản!");
    }
};