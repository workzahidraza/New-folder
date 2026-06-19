const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/postCreate.controller");
const upload = require("../config/multer");

// https://localhost:3000/api/posts/createPost
postRouter.post(
  "/createPost",
  upload.single("photo"),
  postController.createPost,
);
module.exports = postRouter;
