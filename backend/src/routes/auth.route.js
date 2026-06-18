const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");

// http://localhost:3000/api/auth/
authRouter.post("/register", authController.RegisterController);
authRouter.get("/getUser", authController.getUser);
authRouter.post("/login", authController.loginController);

module.exports = authRouter;
