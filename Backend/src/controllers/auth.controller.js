const User = require("../models/user.model.js");
const redis = require("../config/cache.js");

const jwt = require("jsonwebtoken");

const registerUser = async function (req, res) {
  const { username, email, password } = req.body;

  const isAlreadyRegistered = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (isAlreadyRegistered) {
    return res.status(400).json({
      message: "User already  exists",
    });
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User registerd successfully",
    user: {
      id: user._id,
      username: user.username,
      email,
    },
  });
};

const loginUser = async function (req, res) {
  const { email , username } = req.body;

  const user = await User.findOne({
    $or: [{ email }, { username }],
  }).select("+password");

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User login successfully",
    user: {
      id: user._id,
      username: user.username,
      email,
    },
  });
};

const getUser = async function (req, res) {
  const user = await User.findById(req.user.id);

  return res.status(200).json({
    message: "User Fetched successfully",
    user,
  });
};

const logoutUser = async function (req, res) {
  const token = req.cookies.token;

  res.clearCookie(token);

  await redis.set(token, Date.now().toString(), "EX", 60 * 60);

  res.status(200).json({
    message: "logout successfully.",
  });
};

module.exports = { registerUser, loginUser, getUser, logoutUser };
