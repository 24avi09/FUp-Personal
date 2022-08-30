const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key",
    (err, decoded) => {
      if (err) {
        return res.send({ status: false, msg: err.message });
      } else {req.decodedToken = decoded;}
    }
  );
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });
  next();
};
//  {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);

//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself
//   let decodedToken = jwt.verify(token, "functionup-thorium");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });
//     //check the token in request header
//     //validate this token

//     next()
// }

const authorise = async function (req, res, next) {
  // comapre the logged in user's id and the id in request
  let id = req.params.userId;
  let tokens_Id = req["decodedToken"]["userId"];
  let idOfUser = await userModel.findById(id);
  if (!idOfUser) return res.send({ status: false, msg: "User does not exist" });
  if (tokens_Id != id)
    return res.send({ status: false, msg: "Unknow user not authorized" });
  next();
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
