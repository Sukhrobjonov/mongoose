const mongoose = require("mongoose");

async function mongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (err) {
        console.error("MongoErorr", err);
    }
}

module.exports = mongo;
