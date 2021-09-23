const users = require("../models/UserModel");

module.exports = class HomeRouteController {
    static async HomeGetController(req, res) {
        const user = await users;
        console.log(user);
        res.render("index");
    }
};
