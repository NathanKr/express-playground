const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080;
const publicPath = path.join(__dirname, "..", "public");

app.set("view engine", "hbs");

// --- serve static html\css\js\image files
app.use(express.static(publicPath));


app.get('/help',(req,res) =>{
  // --- serve help.hbs
  res.render("help",{somekey: "some dynamic value"});
})

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
