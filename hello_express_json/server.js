const express = require("express");
const app = express();
const PORT = 8080;

console.log(`server listen on port : ${PORT}`);

app.get("/", (req, res) => {
    const income = {description : 'salary' , amount : 7000}
    // --- express translate the object to JSON - check network tab->Headers->Response Headers
    res.send(income);
});

app.listen(PORT);
