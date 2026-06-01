const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log("LOG:", req.method, req.url);
  next();
};

const checkToken = (req, res, next) => {
  if (req.query.token === "student123") next();
  else return res.json({ message: "Utilisateur non authentifié" });
};

const isAdmin = (req, res, next) => {
  if (req.query.role === "admin") next();
  else return res.json({ message: "Accès interdit" });
};

app.get("/dashboard", logger, checkToken, isAdmin, (req, res) => {
  res.send("Dashboard sécurisé");
});

app.listen(3000, () => console.log("Bonus lancé"));