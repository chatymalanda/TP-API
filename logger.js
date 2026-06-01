const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const date = new Date().toISOString().split("T")[0];
  console.log(`[${date}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get("/courses", (req, res) => {
  res.send("Liste des cours");
});

app.listen(3000, () => console.log("Exercice 1 lancé"));