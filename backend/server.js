const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
var cors = require("cors");

dotenv.config({ path: "./config/.env" });

const app = express();
app.use(express.json());

// Had to add cors for access
app.use(cors());

const URL = process.env.URL;

app.get("/api/v1/food", async (req, res) => {
  const { data } = await axios.get(URL);
  res.status(200).json(data);
});

app.get("/api/v1/food/:id", async (req, res) => {
  const id = req.params.id;
  const { data } = await axios.get(URL + "/" + id);
  res.status(200).json(data);
});

app.post("/api/v1/food", async (req, res) => {
  const body = req.body;
  const { data } = await axios.post(URL, body);
  res.status(201).json(data);
});

const PORT = process.env.PORT;

app.listen(PORT);
