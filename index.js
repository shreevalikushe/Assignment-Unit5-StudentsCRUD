const express = require("express");
const app = express();
const allUsers = require("./users.json");
app.use(express.json());
app.listen(4000, (req, res) => {
  console.log("Listening on port 4000");
});

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/users", (req, res) => {
  res.json(allUsers);
});

app.post("/users", (req, res) => {
  const updateUsers = [...allUsers, req.body];
  res.send(updateUsers);
});

app.patch("/users/:id", (req, res) => {
  const updatedRes = allUsers.map((item) =>
    item.id === Number(req.params.id) ? (item = req.body) : item
  );
  res.send(updatedRes);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedList = allUsers.filter((item) => Number(item.id) !== Number(id));
  res.json(updatedList);
});
