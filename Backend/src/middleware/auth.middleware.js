const jwt = require("jsonwebtoken");
const redis = require("../config/cache");

const authUser = async function (req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  const isTokenBlackListed = await redis.get(token);

  if (isTokenBlackListed) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = authUser