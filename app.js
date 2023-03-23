const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
});