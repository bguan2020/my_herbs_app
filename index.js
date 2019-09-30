const express = require("express");
const morgan = require("morgan");
const errorhandler = require("errorhandler");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");


//app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(errorhandler());
app.use('/public', express.static('public'));

app.get("/", (req, res, next) => {
  res.sendFile("index.html", {root : "public"});
});
app.get("/mainV1.1.html", (req, res, next) => {
  res.sendFile("mainV1.1.html", {root : "public"});
});
app.get("/about.html", (req, res, next) => {
  res.sendFile("about.html", {root : "public"});
});
app.get("/hello", (req, res, next) => {
  res.send(hello);});

  let hello = {
    hello: "hello"
  };

let PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
