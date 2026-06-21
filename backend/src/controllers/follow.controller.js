const followModel = require("../models/follow.model");

async function follower(req, res) {
  const follower = req.user.userName;
  const followee = req.params.userName;

  if (followee == follower) {
   return res.status(400).json({
      message: "you cannot follow your self",
    });
  }
  const alreadyFollowed = await followModel.findOne({
    follower: follower,
    followee: followee,
  });
  if (alreadyFollowed) {
    return res.status(400).json({
      message: "cannot follow mutiple time",
    });
  }

  const follow = await followModel.create({
    follower: req.user.userName,
    followee: req.params.userName,
  });
  res.status(200).json({
    message: `you followed this account${followee}`,
    followRecord: {
      follow,
    },
  });
}

module.exports = {
  follower,
};
