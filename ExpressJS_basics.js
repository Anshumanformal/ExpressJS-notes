const express = require("express");
const app = express();

//The callback function has two parameters.
// req object - represents HTTP request.
// res object - represents HTTP response that the Express App sends when it
//              receives an HTTP request.

//Syntax: app.get(route,callback->{<code>});

app.get("/", (req, res) => {
  res.send(`<h1>Server can now respond.  Hello World!</h1>`);
  //   console.log("Hello from the server.");
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
