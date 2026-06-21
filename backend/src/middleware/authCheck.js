const jwt = require("jsonwebtoken");
async function authMiddleware(req, res,next) {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({
      message: "unacthoerised access",
    });
  }
  let decoded = null;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "unauthorised access",
    });
  }
  req.user=decoded
  next();
}

module.exports = authMiddleware;
