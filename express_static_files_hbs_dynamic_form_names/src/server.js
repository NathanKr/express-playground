const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080;
const publicPath = path.join(__dirname, "..", "public");
let names = []

app.set("view engine", "hbs");

// --- serve static html\css\js\image files
app.use(express.static(publicPath));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/names',(req,res) =>{
  // --- serve help.hbs from views directory
  res.render("names",{namesLen: names.length , names : names});
})

app.post('/addName',(req,res) =>{
  const formData = req.body;
  const name = formData.personName;
  names.push(name);

  res.render("names",{namesLen: names.length , names : names});
})

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
