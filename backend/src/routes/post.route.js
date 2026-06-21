const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/postCreate.controller");
const upload = require("../config/multer");

// https://localhost:3000/api/upload/
postRouter.post(
  "/createPost",
  upload.single("photo"),
  postController.createPost,
);
postRouter.get("/posts", postController.getPostsForSameUser);
postRouter.get("/posts/all", postController. getAllUsersPosts);
module.exports = postRouter;
