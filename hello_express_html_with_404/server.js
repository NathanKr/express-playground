const express = require("express");
const app = express();
const PORT = 8080;
console.log(`server listens on port : ${PORT}`);

app.get("/", (req, res) => {
  res.send("<h1>This is Home page</h1>");
});

app.get("/help", (req, res) => {
  res.send("<h1>This is Help page</h1>");
});

app.get("/support", (req, res) => {
  res.send("<h1>This is Support page</h1>");
});

// --- handle every thing that is not handled above, must be last
app.get("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen(PORT);
