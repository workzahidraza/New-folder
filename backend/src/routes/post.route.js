const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/postCreate.controller");
// const ImageKit,
//   { toFile } = require("@imagekit/nodejs");
const upload = require("../config/multer");
// const multer = require("multer");
// const upload = multer({ storage: "/backend/uploads" });

//multer diskstorage option
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// const client = new ImageKit();

// https://localhost:3000/api/posts/createPost
postRouter.post(
  "/createPost",
  upload.single("photo"),
  postController.createPost,
);
module.exports = postRouter;
