import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];

let totalScore = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("/public"));

app.get("/", (req, res) => {
  totalCorrect = 0;
  res.render("index1.ejs", {});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
