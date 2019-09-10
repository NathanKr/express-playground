const express = require("express");
const app = express(),
  PORT = 8080;

// --- used to get body from request
// --- used for json inside request body
app.use(express.json());

let incomes = [
  { description: "salary 1", amount: 7000, id: 1 },
  { description: "salary 2", amount: 5000, id: 2 },
  { description: "salary 3", amount: 3000, id: 3 }
];
let income , ids = incomes.length;

function isIncomeValid(income) {
  return income.amount > 0 && income.description.length > 0;
}

/*
    delete income
    access e.g. with http://localhost:8080/incomes/1
    http method : delete
    no request body info is required
*/
app.delete("/incomes/:id", (req, res) => {
  const id = req.params.id;
  const incomeIndex = incomes.findIndex(it => it.id == id);

  if (incomeIndex == -1) {
    // --- resource was NOT found
    res.sendStatus(404);
    return;
  }

  // --- resource was found
  incomes.splice(incomeIndex, 1); // --- remove from array
  res.sendStatus(200);
});

/*
    update income (by replacing it in incomes)
    access e.g. with http://localhost:8080/incomes/1
    http method : put
    request body has description , amount , id
    includes input validation
*/
app.put("/incomes/:id", (req, res) => {
  const incomeUpdated = req.body;
  const id = req.params.id;

  const incomeIndex = incomes.findIndex(it => it.id == id);

  if (incomeIndex == -1) {
    // --- resource was NOT found
    res.sendStatus(404);
    return;
  }

  // --- validate input
  if (!isIncomeValid(incomeUpdated)) {
    // --- input is NOT VALID
    res.sendStatus(400); // bad request , it is possible to add also the error description
    return;
  }

  // --- resource was found and is valid so change item in array
  incomes[incomeIndex] = incomeUpdated;
  res.send(incomeUpdated);
});

/*
    create income
    id is created here , BUT it will be created later instead by MongoDB
    access e.g. with http://localhost:8080/incomes
    http method : post
    request body has description and amount
    includes input validation
*/
app.post("/incomes", (req, res) => {
  const body = req.body;

  // --- validate input
  if (!isIncomeValid(body)) {
    // --- input is NOT VALID
    res.sendStatus(400); // bad request , it is possible to add also the error description
    return;
  }

  // --- input is valid
  income = {
    description: body.description,
    amount: body.amount,
    id: ++ids
  };

  incomes.push(income);
  /*
       --- send it so client can use later this object id
       ---  e.g. for update\delete
  */
  res.status(201).send(income); // -- 201 - created
});

/*
    get all incomes \ get specific income
    access e.g. with  http://localhost:8080/incomes?description=salary 1 
        or http://localhost:8080/incomes
    http method : get
*/
app.get("/incomes", (req, res) => {
  const query = req.query;
  if (query.description) {
    // --- handle the possiblity of few income with same description
    const incomesFound = incomes.find(it => it.description == query.description);
    incomesFound.length ? res.send(incomesFound) : res.sendStatus(404);
  } else {
    res.send(incomes);
  }
});

/* 
    get income with specific id 
    access e.g. with http://localhost:8080/incomes/1
    http method : get
*/
app.get("/incomes/:id", (req, res) => {
  const params = req.params;
  income = incomes.find(it => it.id == params.id);
  income ? res.send(income) : res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
