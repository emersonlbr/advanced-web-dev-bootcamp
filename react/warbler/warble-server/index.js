const app        = express(),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      express    = require('express');

const errorHandler = require('./handlers/error');

const PORT = process.env.PORT || 8081

app.use(cors());
app.use(bodyParser.json());

// // All my routes here - they will come later!

app.use(function (req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log("Server is starting on port " + PORT);
})