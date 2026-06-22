const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//routes
const authRouter = require("./routes/auth.route");
const postRouter = require("./routes/post.route");
const followRouter = require("./routes/follow.route");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/upload", postRouter);
app.use("/api/follow", followRouter);

module.exports = app;
