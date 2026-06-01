const express = require("express");
const app = express();

const isAdmin = (req, res, next) => {
  if (req.query.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Accès interdit" });
  }
};

app.get("/admin", isAdmin, (req, res) => {
  res.send("Bienvenue Admin");
});

app.listen(3000, () => console.log("Exercice 2 lancé"));