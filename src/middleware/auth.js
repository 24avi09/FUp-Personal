const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key",
    (err, decoded) => {
      if (err) {
        return res.send({ status: false, msg: err.message });
      } else {
        req.decodedToken = decoded;
      }
    }
  );
  next();
};

const authorise = async function (req, res, next) {
  // comapre the logged in user's id and the id in request
  let id = req.params.userId;
  let tokens_Id = req.decodedToken.userId;
  let idOfUser = await userModel.findById(id);
  if (!idOfUser) return res.send({ status: false, msg: "User does not exist" });
  if (tokens_Id != id)
    return res.send({ status: false, msg: "Unknow user not authorized" });
  next();
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
