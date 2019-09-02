const express = require("express");
const path = require("path"), app = express() , PORT = 8080;
const publicPath = path.join(__dirname, "..", "public");

// loads index.html when route is /
// loads help.html when route is /help.html
// loads support.html when route is /support.html
app.use( express.static(publicPath));


app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
