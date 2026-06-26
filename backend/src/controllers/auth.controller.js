const userModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function RegisterController(req, res) {
  const { userName, userEmail, password, bio, profile_pic } = req.body;
  const alreadyExists = await userModel.findOne({
    $or: [{ userName }, { userEmail }],
  });
  if (alreadyExists) {
    return res.status(409).json({
      message:
        "user alerady exists" +
        (alreadyExists.userName == userName
          ? "username is aleready exists"
          : "userEmail already exists"),
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    userName,
    userEmail,
    password: hash,
    bio,
    profile_pic,
  });
  const token = jwt.sign(
    {
      id: user._id,
      userName: user.userName,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("jwt", token);
  res.status(201).json({
    message: "inserted succussfully",
    data: {
      name: userName,
      email: userEmail,
      bio: bio,
      profile_img: profile_pic,
    },
  });
}
async function getUser(req, res) {
  const users = await userModel.find();
  res.status(200).json({
    message: "all data present",
    data: users,
  });
}

async function loginController(req, res) {
  const { userName, userEmail, password } = req.body;

  const isUserRegistered = await userModel.findOne({
    $or: [{ userName }, { userEmail }],
  });
  if (!isUserRegistered) {
    return res.status(404).json({
      message: "user not found",
      // isUserRegistered.userName == userName
      //   ? "no username found"
      //   : "no username found",
    });
  }
  const hash = await bcrypt.compare(password, isUserRegistered.password);
  if (!hash) {
    return res.status(401).json({
      message: "password is invalid",
    });
  }

  //Login me user create nahi karte

  //  const user=await userModel.create({
  //     userName,
  //     userEmail,
  //     password:hash
  //  })
  const token = jwt.sign(
    { id: isUserRegistered._id, userName: isUserRegistered.userName },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("jwt", token);

  res.status(200).json({
    message: "loggined",
    data: {
      isUserRegistered,
    },
  });
}
module.exports = {
  RegisterController,
  getUser,
  loginController,
};
