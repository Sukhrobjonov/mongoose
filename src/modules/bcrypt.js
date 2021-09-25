const { genSalt, hash, compare } = require("bcrypt");

async function genCrypt(data) {
    const salt = await genSalt(10);
    return hash(data, salt);
}

async function compareHash(data, hash) {
    return compare(data, hash);
}

module.exports = {
    genCrypt,
    compareHash,
};
