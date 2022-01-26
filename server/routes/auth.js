const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
  updateAccountSetting,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/accountsetting").post(protect, updateAccountSetting);

module.exports = router;
