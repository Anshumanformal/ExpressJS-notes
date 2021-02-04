// // ExpressJS express.Router() function.

// const express = require("express");
// const app = express();

// const port = 3000;

// // Single routing.

// const router = express.Router();
// app.use(router);

// app.listen(port, (err) => {
//   if (err) console.log(err);
//   console.log("Server listening on port", port);
// });

// router.get("/", (req, res) => {
//   console.log("Router working");
//   res.send("Response from /");
// });

// Multiple Routing:
const express = require("express");
const app = express();
const port = 3000;

//Defining multiple routes.
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

router1.get("/user", (req, res) => {
  console.log("User router working");
  res.end("From User routes.");
});

router2.get("/admin", (req, res) => {
  console.log("Admin router working");
  res.end("From Admin routes.");
});
router3.get("/student", (req, res) => {
  console.log("Student router working");
  res.end("From Student routes.");
});

app.use(router1);
app.use(router2);
app.use(router3);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server listening on port", 3000);
});
