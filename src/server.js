const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const path = require("path");
const mongo = require("./modules/mongoose");

const routes = require("./routes/routes");

async function server(mode) {
    const app = express();
    app.listen(PORT, () => {
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
        app.use(express.static(path.join(__dirname, "public")));
        if (mode == "DEV") {
            app.use(morgan("dev"));
        }

        await mongo();

        // Settings

        app.set("view engine", "ejs");
        app.set("views", path.join(__dirname, "views"));
    } finally {
        routes(app);
    }
}

module.exports = server;
