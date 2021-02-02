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
