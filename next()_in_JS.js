//Demonstration of next() in JS.

app.get(
  "/example",
  (req, res, next) => {
    console.log(
      "Inside the example. Response will be sent by the next() function."
    );
  },
  (req, res) => {
    res.send("Hello from B!");
  }
);
