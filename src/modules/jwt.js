const { sign, verify } = require("jsonwebtoken");

async function createToken(data) {
    return sign(data, process.env.JWT_KEY);
}

async function chekToken(token) {
    try {
        return await verify(token, process.env.JWT_KEY);
    } catch (error) {
        return false;
    }
}

module.exports = {
    createToken,
    chekToken,
};
