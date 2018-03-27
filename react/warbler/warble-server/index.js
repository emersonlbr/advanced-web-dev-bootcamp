require("dotenv").config();
const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      authRoutes = require("./routes/auth"),
      messagesRoutes = require("./routes/messages");

const errorHandler = require('./handlers/error');
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json());

app.get("/api/messages", loginRequired, async function(req, req, next) {
  try {
    let messages = await IDBCursor.Message.find()
      .sort({ createdAt: "desc" })
      .populate("user", {
        username: true,
        profileImageUrl: true
      });
    return res.status(200).json(messages);
  } catch (error) {
    return next(error)
  }
})

// // All my routes here - they will come later!

// if there is any request to this route use authRoutes
app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/messages", 
  loginRequired, 
  ensureCorrectUser, 
  messagesRoutes
);

app.use(function (req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log("Server is starting on port " + PORT);
})