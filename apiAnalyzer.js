const express = require("express");
const app = express();

app.use(express.json());

const apiAnalyzer = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = Date.now() - start;
    console.log(`${req.method} ${req.url}`);
    console.log(`Temps: ${time}ms`);
    console.log("Body:", req.body);
  });

  next();
};

app.use(apiAnalyzer);

app.post("/courses", (req, res) => {
  res.json({
    message: "Cours ajouté",
    data: req.body
  });
});

app.listen(3000, () => console.log("Exercice 5 lancé"));