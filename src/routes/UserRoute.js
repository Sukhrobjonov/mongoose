const {
    UserRegistrationGetController,
    UserLoginGetController,
    UserRegistrationPostController,
    UserLoginPostController,
} = require("../controllers/UserRouteController");

const router = require("express").Router();

router.get("/register", UserRegistrationGetController);
router.get("/login", UserLoginGetController);
router.post("/register", UserRegistrationPostController);
router.post("/login", UserLoginPostController);

module.exports = {
    path: "/users",
    router,
};
