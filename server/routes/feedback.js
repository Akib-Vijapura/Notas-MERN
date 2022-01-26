const express = require("express");
const { feedback } = require("../controllers/feedback");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.route("/feedback").post(protect ,feedback);
module.exports = router;
