const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080;
const publicPath = path.join(__dirname, "..", "public");
const names = ["Nathan" , "Nitzan" , "Yael" , "Jim"]

app.set("view engine", "hbs");

// --- serve static html\css\js\image files
app.use(express.static(publicPath));


app.get('/help',(req,res) =>{
  // --- serve help.hbs from views directory
  res.render("help",{namesLen: names.length , names : names});
})

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
