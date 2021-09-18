const database = require("../modules/mongoose");

async function databaseMiddleware(req, req, next) {
    const db = await database();
    req.db = db;
    next();
}

module.exports = databaseMiddleware;
