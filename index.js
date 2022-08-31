const express = require("express");

const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 8080;

const books = [
  {
    author: "Mark twain",
    title: "Huckleberry Finn",
    releasedYear: 1884,
  },
  {
    author: "Frank Herbert",
    title: "Dune",
    releasedYear: 1965,
  },
];

app.get("/", (req, res) => res.render("welcome"));
app.get("/api/book", (req, res) => res.json(books));

app.listen(port, () => console.log("Server listening at " + port));
