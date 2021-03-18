const express = require("express");
const home = require("./routes/home");  // index.js 파일 읽음
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);  

module.exports = app;