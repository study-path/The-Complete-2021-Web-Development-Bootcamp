import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandGenerator(req, res, next) {
  bandName = req.body.street + " " + req.body.pet;
  next();
}

app.use(bandGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// POST /submit gets urlencoded bodies
app.post("/submit", (req, res) => {
  res.send(`<h2>Your band name is: </h2><h3>${bandName}</h3>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
