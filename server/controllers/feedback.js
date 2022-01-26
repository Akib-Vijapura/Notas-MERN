const asyncHandler = require("express-async-handler")
const FeedBack = require("../models/FeedBack")

const feedback = asyncHandler(async (req, res) => {
  const { username, email , message } = req.body;

  if (!username || !email || !message) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const feedback = new FeedBack({ user: req.user._id, username,email ,  message });

    const feedbackMesg = await feedback.save();

    res.status(201).json(feedbackMesg);
  }
});

module.exports = {feedback}