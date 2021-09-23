module.exports = class UserRouteController {
    static async UserRegistrationGetController(req, res) {
        res.render("register");
    }

    static async UserLoginGetController(req, res) {
        res.render("login");
    }

    static async UserRegistrationPostController(req, res) {
        console.log(req.body);
    }

    static async UserLoginPostController(req, res) {
        console.log(req.body);
    }
};
