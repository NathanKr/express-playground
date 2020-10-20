console.log('app is loading ...');
const express = require('express');
const app = express();
const PORT = 8080;

// --- app.use should be BEFORE the route handlers !!!!!!!!!!!!!!
app.use((req, res, next) => {
    const now = new Date().toString() ;
    console.log(`time : ${now} ,method : ${req.method} , url : ${req.url}`)
    next();
   });

app.get('/',(req,res) =>{
    res.send('<h1>Home</h1>') 
})

app.get('/about',(req,res) =>{
    res.send('<h1>About</h1>')  
})


   

app.listen(PORT,() =>{
    console.log(`app listens on port ${PORT}`);
})