const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/postCreate.controller");
const upload = require("../config/multer");
const authMiddleware = require("../middleware/authCheck");

// https://localhost:3000/api/upload/
postRouter.post(
  "/createPost",
  upload.single("photo"),
  authMiddleware,
  postController.createPost,
);
postRouter.get("/posts", authMiddleware, postController.getPostsForSameUser);
postRouter.get("/posts/all", authMiddleware, postController.getAllUsersPosts);
postRouter.post("/like/:postId", authMiddleware, postController.likePost);
module.exports = postRouter;
