const express = require("express"),
path = require('path');
const app = express(), PORT = 8080;
const arIncomes =[
    {description : 'salary1' , amount : 7000} ,
    {description : 'salary2' , amount : 5000} ,
    {description : 'salary3' , amount : 3000} ,
  ];

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

// --- send arIncomes back to client when /incomes is requested
app.get('/incomes',(req,res) =>{
    res.send(arIncomes);
})
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
