console.log("app is loading...");
const PORT = 8080;
const express = require("express");
const app = express();
const path = require("path");

// { id: 1, name: "task1", completed: true },
let freeId = 0;
let tasks = [];

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));
app.use(express.json());

app.post("/tasks", (req, res) => {
  const { name } = req.body;
  if (name) {
    const newTask = {name,id:freeId,completed:false};
    freeId++;
    tasks.push(newTask);
    // send new object so client can use it without need to use get tasks
    res.status(201).send(newTask); 
  } else {
    res.sendStatus(400);
  }
});

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
