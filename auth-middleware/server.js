console.log('app is loading ...');
const express = require('express');
const app = express();
const PORT = 8080;

function auth(req, res, next){
    console.log(`do auth functionality`)
    next();
}

app.get('/',(req,res) =>{
    res.send('<h1>Home</h1>') 
})

app.get('/about',(req,res) =>{
    res.send('<h1>About</h1>')  
})

app.get('/shoping-cart',auth,(req,res) =>{
    res.send('<h1>Shoping Cart</h1>')  
})

   

app.listen(PORT,() =>{
    console.log(`app listens on port ${PORT}`);
})