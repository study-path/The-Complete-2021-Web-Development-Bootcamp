import express from "express";
const app = express();
const port = 3100;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me :</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact us</h1><p>Phone:+1614614611</p>");
});

app.post("/about", (req, res) => {
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
