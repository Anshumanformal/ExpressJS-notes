// Routing in ExpressJS.

const express = require("express");
const cors = require("cors");
const app = express();
//app.use(cors);
app.get("/", (req, res) => {
  res.send(`<h1>Server can now respond.  Hello World!`);
});

app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Hello",
    },
    {
      id: 1,
      name: "Hello",
    },
    {
      id: 1,
      name: "Hello",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send(`<h1>Responding from About Us page.</h1>`);
});

app.get("/contactUs", (req, res) => {
  res.send(`<h1>Responding from Contact Us page.</h1>`);
});

app.listen(8000, "127.0.0.1", () => {
  console.log("The server is listening.");
});
