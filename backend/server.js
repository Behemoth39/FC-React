const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Works?");
});

const PORT = 5000;

app.listen(PORT);
