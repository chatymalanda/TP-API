//INITIALISATION DE L'API AVEC EXPRESS
const express = require('express');
//creation de l'instance de l'application express
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("API fonctionne!");
});
app.get("/Bonjour", (req, res) => {
    res.send("Bonjour tout le monde!");
  });

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
