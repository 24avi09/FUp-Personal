const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token)
      return res.status(404).send({ status: false, msg: "token must be present" });

    jwt.verify(
      token,
      "functionup-plutonium-very-very-secret-key",
      (err, decoded) => {
        if (err) {
          return res.status(404).send({ status: false, msg: err.message })
        } else {
          req.decodedToken = decoded
        }
      }
    );
    next();
  } catch (err) {
    return res.status(500).send({ msg: "Server Error" });
  }
};

const authorise = async function (req, res, next) {
  try {
    // comapre the logged in user's id and the id in request
    let id = req.params.userId;
    let tokens_Id = req.decodedToken.userId;
    let idOfUser = await userModel.findById(id);
    if (!idOfUser)
      return res.status(404).send({ status: false, msg: "User does not exist" })
    if (tokens_Id != id)
      return res.status(404).send({ status: false, msg: "Unknow user not authorized" })
    next();
  } catch (err) {
    return res.status(500).send({ msg: "Server Error" })
  }
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
