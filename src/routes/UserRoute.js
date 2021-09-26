const {
    UserRegistrationGetController,
    UserLoginGetController,
    UserRegistrationPostController,
    UserLoginPostController,
    UserExitGetController,
    UserPtofileGetController,
} = require("../controllers/UserRouteController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.get("/register", UserRegistrationGetController);
router.get("/login", UserLoginGetController);
router.get("/exit", UserExitGetController);
router.get("/profile", AuthMiddleware, UserPtofileGetController);

router.post("/register", UserRegistrationPostController);
router.post("/login", UserLoginPostController);

module.exports = {
    path: "/users",
    router,
};
