// const userPostModel = require("../models/postCreation.model");
const imagekit = require("../config/imageKit");

async function createPost(req, res) {
  try {
    const { caption, userId } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Please upload an image",
      });
    }

    const uploadImage = await imagekit.upload({
      file: req.file.buffer,
      fileName: Date.now() + "-" + req.file.originalname,
      folder: "/insta-clone-post",
    });

    console.log(uploadImage);

    res.status(201).json({
      message: "Post created successfully",
      imageUrl: uploadImage.url,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = { createPost };