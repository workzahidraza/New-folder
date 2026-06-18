require("dotenv").config();
const app = require("./src/app");
const connetToDb = require("./src/config/database");

app.listen(3000, () => {
  console.log("server is started at port 3000");
  connetToDb();
});
