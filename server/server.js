require("dotenv").config({ path: "../config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
// const notes = require("./data/notes");

connectDB();

app.use(express.json());
// home
app.get("/", (req, res, next) => {
  res.send("Api running");
});

//all notes
// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// // get notes with id
//  app.get("/api/notes/:id", (req, res) => {
//    const note = notes.find((n) => n._id === req.params.id);
//    res.send(note);
//  });

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/private", require("./routes/private"));
app.use("/api", require("./routes/feedback"));


// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  {
    console.log("┌──────────────────────────────────┐");
    console.log("│   Notas app Server Started...    │");
    console.log(`│   Listening on the port ${PORT}     │`);
    console.log("│                                  │");
    console.log("└──────────────────────────────────┘");
  }
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
