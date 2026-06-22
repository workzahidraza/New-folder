const express = require("express");
const followRoute = express.Router();
const followContoller = require("../controllers/follow.controller");
const userCheck = require("../middleware/authCheck");

// http://localhost:3000/api/follow/
followRoute.post("/:userName", userCheck, followContoller.follower);
followRoute.delete("/:userName", userCheck, followContoller.unfollow);


module.exports = followRoute;
