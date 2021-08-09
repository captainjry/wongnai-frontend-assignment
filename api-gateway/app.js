require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const helmet = require("helmet");
const httpErrors = require("http-errors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         "default-src": ["'self'"],
//       },
//     },
//   })
// );

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(
//   bodyParser.raw({
//     type: "application/jwt",
//   })
// );

// Routes
app.use(require("./routes"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).json({
    error: {
      status: err.status,
      message: err.message,
      info: err.info,
    },
  });
});

module.exports = app;
