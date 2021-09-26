const users = require("../models/UserModel");
const { genCrypt, compareHash } = require("../modules/bcrypt");
const { createToken } = require("../modules/jwt");
const {
    registrationValidation,
    loginValidation,
} = require("../modules/validation");

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
        try {
            const { email, password } = await loginValidation(req.body);

            const user = await users.findOne({
                email: email,
            });

            if (!user) throw new Error("Пользователь не найден");

            const isTrust = await compareHash(password, user.password);

            if (!isTrust) throw new Error("Неверный пароль");

            res.cookie(
                "token",
                await createToken({
                    id: user._id,
                })
            ).redirect("/");
        } catch (error) {
            res.render("login", {
                error,
            });
        }
    }

    static async UserExitGetController(req, res) {
        res.clearCookie("token").redirect("/");
    }

    static async UserPtofileGetController(req, res) {
        res.render("profile", {
            user: req.user,
        });
    }
};
