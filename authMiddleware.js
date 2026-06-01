const express = require("express");
const app = express();

const checkToken = (req, res, next) => {
  if (req.query.token === "student123") {
    next();
  } else {
    res.status(401).json({
      message: "Utilisateur non authentifié"
    });
  }
};

app.get("/profile", checkToken, (req, res) => {
  res.send("Profil utilisateur");
});

app.listen(3000, () => console.log("Exercice 3 lancé"));