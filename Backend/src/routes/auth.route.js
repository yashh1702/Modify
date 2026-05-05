const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  logoutUser
} = require("../controllers/auth.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getuser", authMiddleware, getUser);
router.get("/logout",logoutUser)

module.exports = router;
