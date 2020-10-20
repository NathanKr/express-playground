console.log('app is loading ...');
const express = require('express');
const app = express();
const PORT = 8080;

function auth(req, res, next){
    console.log(`do auth functionality`)
    next();
}

app.get('/',(req,res) =>{
    console.log('Home page');
    res.send('<h1>Home</h1>') 
})

app.get('/about',(req,res) =>{
    console.log('About page');
    res.send('<h1>About</h1>')  
})

app.get('/shopping-cart',auth,(req,res) =>{
    console.log("Shopping Cart page");
    res.send('<h1>Shopping Cart</h1>')  
})

   

app.listen(PORT,() =>{
    console.log(`app listens on port ${PORT}`);
})