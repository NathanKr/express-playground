const express = require("express");
const app = express(),
  PORT = 8080;

const path = require("path");
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

// --- used for json in body
app.use(express.json());
let ids = 3;

const incomes = [
  { description: "salary 1", amount: 26000, id: 1 },
  { description: "salary 2", amount: 12000, id: 2 }
];

function isValidationOk(description, amount) {
  return (description.length > 0) && (amount > 0);
}

// update
app.put("/incomes/:id", (req, res) => {
  const id = req.params.id;
  const updatedIncome = req.body;

  // --- validate the descption length > 0 , amount > 0
  // --- if not return status code 400 - BAD REQUEST

  if (isValidationOk(updatedIncome.description, updatedIncome.amount)) {
    // --- input is valid
    const index = incomes.findIndex(it => it.id == id);
    if (index == -1) {
      res.sendStatus(404);
    } else {
      incomes[index] = updatedIncome;
      res.send(updatedIncome);
    }
  } else {
    // --- input is not valid
    res.sendStatus(400);
  }
});

// delete
app.delete("/incomes/:id", (req, res) => {
  const index = incomes.findIndex(it => it.id == req.params.id);
  // --- need to check index is ok
  if (index == -1) {
    res.sendStatus(404);
  } else {
    incomes.splice(index, 1);
    res.sendStatus(200);
  }
});

// --- create
app.post("/incomes", (req, res) => {
  const newIncome = {
    description: req.body.description,
    amount: req.body.amount,
    id: ids
  };

  if (isValidationOk(newIncome.description, newIncome.amount)) {
    ids++;
    incomes.push(newIncome);
    res.status(201).send(newIncome);
  } else {
    // --- input is not valid
    res.sendStatus(400);
  }
});

// --- read
app.get("/incomes", (req, res) => {
  if (req.query.description == undefined) {
    // got /incomes
    res.send(incomes);
  } else {
    // got e.g. /incomes?description=salary 1
    // -- got query string -> req.query.description
    const income = incomes.find(it => it.description == req.query.description);
    if (income == undefined) {
      res.sendStatus(404);
    } else {
      res.send(income);
    }
  }
});

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
