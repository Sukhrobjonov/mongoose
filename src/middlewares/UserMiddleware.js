const users = require("../models/UserModel");
const { chekToken } = require("../modules/jwt");

module.exports = async function UserMiddleware(req, res, next) {
    try {
        if (!req.cookies.token) {
            next();
            return;
        }

        const data = await chekToken(req.cookies.token);
        if (!data) {
            next();
            return;
        }

        const user = await users.findOne({
            _id: data.id,
        });

        req.user = user;
        next();
    } catch (error) {
        next();
    }
};
