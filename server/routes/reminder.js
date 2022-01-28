const express = require("express");
const router = express.Router();
const Reminder = require("../models/Reminder");

router.get("/getallreminder", (req, res) => {
  Reminder.find({}, (err, reminderList) => {
    if (err) {
      console.log(err);
    }
    if (reminderList) {
      res.send(reminderList);
    }
  });
});

router.post("/addreminder", (req, res) => {
  const { reminderMsg, remindAt } = req.body;
  const reminder = new Reminder({
    reminderMsg,
    remindAt,
    isReminded: false,
  });
  reminder.save((err) => {
    if (err) {
      console.log(err);
    }
    Reminder.find({}, (err, reminderList) => {
      if (err) {
        console.log(err);
      }
      if (reminderList) {
        res.send(reminderList);
      }
    });
  });
});

router.post("/deletereminder", (req, res) => {
  Reminder.deleteOne({ _id: req.body.id }, () => {
    Reminder.find({}, (err, reminderList) => {
      if (err) {
        console.log(err);
      }
      if (reminderList) {
        res.send(reminderList);
      }
    });
  });
});

// Reminder On WhatsApp


setInterval(() => {
  Reminder.find({}, (err, reminderList) => {
    if (err) {
      console.log(err);
    }
    if (reminderList) {
      reminderList.forEach((reminder) => {
        if (!reminder.isReminded) {
          const now = new Date();
          if (new Date(reminder.remindAt) - now < 0) {
            Reminder.findByIdAndUpdate(
              reminder._id,
              { isReminded: true },
              (err, remindObj) => {
                if (err) {
                  console.log(err);
                }
                const accountSid = process.env.ACCOUNT_SID;
                const authToken = process.env.AUTH_TOKEN;
                const client = require("twilio")(accountSid, authToken);
                client.messages
                  .create({
                    body: reminder.reminderMsg,
                    from: "whatsapp:+14155238886",
                    to: "whatsapp:+917487846936",
                  })
                  .then((message) => console.log(message.sid))
                  .done();
              }
            );
          }
        }
      });
    }
  });
}, 1000);


module.exports = router;
