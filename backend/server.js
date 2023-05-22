const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config({ path: "./config/.env" });

const app = express();

app.get("/api", (req, res) => {
  res.send("Works?!");
});

const PORT = process.env.PORT;

app.listen(PORT);
