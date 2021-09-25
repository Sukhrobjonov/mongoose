const users = require("../models/UserModel");
const { genCrypt } = require("../modules/bcrypt");
const mail = require("../modules/email");
const { registrationValidation } = require("../modules/validation");

module.exports = class UserRouteController {
    static async UserRegistrationGetController(req, res) {
        res.render("register");
    }

    static async UserLoginGetController(req, res) {
        res.render("login");
    }

    static async UserRegistrationPostController(req, res) {
        try {
            const { name, email, password } = await registrationValidation(
                req.body
            );
            const user = await users.create({
                name,
                email,
                password: await genCrypt(password),
            });

            res.redirect("/users/login");
        } catch (error) {
            res.render("register", {
                error,
            });
        }
    }

    static async UserLoginPostController(req, res) {
        console.log(req.body);
    }
};
