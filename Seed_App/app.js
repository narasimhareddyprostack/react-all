import express from "express";
import morgan from "morgan";
import chalk from "chalk";
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(9000, (err) => {
  console.log(`${chalk.blue(`Server Running on... ${9000}`)}`);
});
