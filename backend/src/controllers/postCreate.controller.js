const userPostModel = require("../models/postCreation.model");
const imagekit = require("../config/imageKit");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

async function createPost(req, res) {
  console.log(req.body);
  console.log(req.file);
  console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({
      message: "unauthorised access",
    });
  }
  let decoded = null;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "user not authorised",
    });
  }
  console.log(decoded);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone-posts",
  });

  const post = await userPostModel.create({
    caption: req.body.caption,
    photo_url: file.url,
    userId: decoded.id,
  });

  res.status(201).json({
    message: "post created sucessfully",
  });
}

module.exports = { createPost };
