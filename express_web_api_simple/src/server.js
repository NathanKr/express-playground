const express = require('express');
const app = express() , PORT = 8080 , path = require('path');

const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get('/incomes',(req,res) =>{
    res.send([
        {description : 'salary 1' , amount : 7000} ,
        {description : 'salary 2' , amount : 5000} 
    ]);
})

app.listen(PORT , () =>{
    console.log(`listening on ${PORT}`);
})