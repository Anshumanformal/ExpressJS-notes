// Due to the stateless nature of HTTP protocol,
// every new API request needs a complete
// authentication.


/*
JSON Web Token (JWT) is an open standard (RFC 7519)
that defines a way for transmitting information –like
authentication and authorization facts– between two
parties: an issuer and an audience. Communication is
safe because each token issued is digitally signed, so
the consumer can verify if the token is authentic or has
been forged.

*/


// Anatomy of a JWT:
// A JSON Web Token is essentially a long
// encoded text string. This string is composed
// of three smaller parts, separated by a dot sign. These parts are:
// 1. the header;
// 2. a payload or body;
// 3. a signature;

// Therefore, our tokens will look like this:
// header.payload.signature


// Implementation.

// JWT(jsonwebtoken).
// It has three parts - header, payload and verify signature.
// Header -> contains the algorithm and token type
// Payload -> body data
// Token signature -> used to verify signature

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("Welcome to my API");
});

//Creating a route which we want to protect.
app.post("/api/posts", verifyToken, (req, res) => {
  //Inserting a middleware function named 'verifytoken'.
  // Middlewares are executed before the controller/callback function
  // gets the control of the function.
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created..",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  //Mock user
  const user = {
    id: 1,
    username: "brad",
    email: "abc@xyz.com",
  };

  jwt.sign({ user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

//Format of Token.
// Authorization : Bearer <access_token>

//Verify Token.
function verifyToken(req, res, next) {
  // Get Auth Header Value.
  const bearerHeader = req.headers["authorization"];
  //Check if bearer is undefined.
  if (typeof bearerHeader !== "undefined") {
    //Split at the space.
    const bearer = bearerHeader.split(" ");
    // Get token from an array.
    const bearerToken = bearer[1];
    //Set the token.
    req.token = bearerToken;
    //Call the next middleware.
    next();
  } else {
    //Forbidden
    res.sendStatus(403);
  }
}

app.listen(port, console.log("Server is listening on port", port));




