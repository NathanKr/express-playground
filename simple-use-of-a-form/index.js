console.log('app is loading ...');
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/city',(req,res)=>{
    const query = req.query; // used get in form so use query string
    const cityName = query.city; // input name is city so use query.city
    res.send(`<h1>got city ${cityName}</h1>`)
})

app.listen(PORT,() => console.log(`app is listening on port ${PORT}`));
