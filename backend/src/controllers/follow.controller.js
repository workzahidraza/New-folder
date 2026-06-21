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
async function unfollow(req, res) {
  const followerUserName = req.user.userName;
  const followeeUserName = req.params.userName;

  const checkFollowing = await followModel.findOne({
    follower: followerUserName,
    followee: followeeUserName,
  });
  if (!checkFollowing) {
    return res.status(404).json({
      message: "not found",
    });
  }
  const unfollowUser= await followModel.findByIdAndDelete(checkFollowing._id);
  res.status(200).json({
    message: `${followerUserName} unfollows ${followeeUserName} sucessfully unfollowed`,
  });
}
module.exports = {
  follower,
  unfollow,
};
