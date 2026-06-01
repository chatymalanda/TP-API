const express = require("express");
const app = express();

let compteur = 0;

const rateLimiter = (req, res, next) => {
  compteur++;

  if (compteur > 5) {
    return res.status(429).json({
      message: "Trop de requêtes"
    });
  }

  next();
};

app.get("/courses", rateLimiter, (req, res) => {
  res.send("Cours disponibles");
});

app.listen(3000, () => console.log("Exercice 4 lancé"));