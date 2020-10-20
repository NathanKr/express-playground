console.log('app is loading ...');
const express = require('express');
const app = express();
const PORT = 8080;

function logger(req, res, next){
    const now = new Date().toString() ;
    console.log(`Logger - time : ${now} ,method : ${req.method} , url : ${req.url}`)
    next();
}

app.use(logger); 

app.get('/',(req,res) =>{
    console.log("Home page");
    res.send('<h1>Home</h1>') 
})

app.get('/about',(req,res) =>{
    console.log("Home page");
    res.send('<h1>About</h1>')  
})


   

app.listen(PORT,() =>{
    console.log(`app listens on port ${PORT}`);
})