const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
console.log(`server listens on port : ${PORT}`);

const publicDirFullPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDirFullPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(publicDirFullPath, "about.html"));
});

app.get("/support", (req, res) => {
  res.sendFile(path.join(publicDirFullPath, "support.html"));
});
app.listen(PORT);
