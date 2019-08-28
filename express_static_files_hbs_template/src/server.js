const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080,
  publicPath = path.join(__dirname, "..", "public");

// --- hbs stuff
const hbs = require("hbs"),
  viewsPath = path.join(__dirname, "..", "templates","views"),
  partialsPath = path.join(__dirname, "..", "templates","partials");
app.set("view engine", "hbs");
// --- use non default name , here use templates directory
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// --- serve static html\css\js\image files
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  // --- serve index.hbs from views directory (templates in this case)
  res.render("index");
});

app.get("/support", (req, res) => {
  // --- serve support.hbs from views directory (templates in this case)
  res.render("support");
});


app.get("/help", (req, res) => {
  // --- serve help.hbs from views directory (templates in this case)
  res.render("help", { somekey: "some dynamic value" });
});

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
