console.log("app is loading...");
const PORT = 8080;
const express = require("express");
const app = express();
const path = require("path");

const tasks = [
  { id: 1, name: "task1", completed: true },
  { id: 2, name: "task2", completed: false },
];

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
