const express = require("express");
const app = express();
const cors = require('cors')

app.get("/", (req, res) => {
  res.send("Accueil");
});

app.get("/api/location", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/location/:year/:month", (req, res) => {
  res.send(req.params);
});

app.listen(3000, () => console.log("Listening on port 3000..."));
