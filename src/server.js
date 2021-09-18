const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const path = require("path");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const routes = require("./routes/routes");

async function server(mode) {
    const app = express();
    app.listen(PORT, _ => {
        console.log(`Server has been started on ${PORT} port`);
    });
    try {
        // Middlewares

        app.use(
            express.urlencoded({
                extended: true,
            })
        );
        app.use(express.json());
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, "src", "public")));
        if (mode == "DEV") {
            app.use(morgan("dev"));
        }
        app.use(databaseMiddleware);

        // Settings

        app.set("view engine", "ejs");
    } finally {
        routes(app);
    }
}

module.exports = server;
