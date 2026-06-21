const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//routes
const authRouter = require("./routes/auth.route");
const postRouter = require("./routes/post.route");
const followRouter = require("./routes/follow.route");

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/upload", postRouter);
app.use("/api/follow", followRouter);

module.exports = app;
