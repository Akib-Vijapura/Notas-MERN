const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  reminderMsg: {
    type: String,
    required: true,
  },
  remindAt: {
    type: String,
    required: true,
  },
  isReminded: {
    type: Boolean,
  },
});
const Reminder = new mongoose.model("reminder", reminderSchema);

module.exports = Reminder;
