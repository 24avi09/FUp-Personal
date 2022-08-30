const jwt = require("jsonwebtoken");
const nodemon = require("nodemon");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    return res.status(200).send({ msg: savedData });
  } catch (error) {
    return res.status(500).send({ msg: "Server Error" });
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FUnctionUp",
        mobile: "836373833",
      },
      "functionup-plutonium"
    );
    res.setHeader("x-auth-token", token);
    return res.status(200).send({ status: true, data: token });
  } catch (error) {
    return res.status(500).send({ msg: "Server Error" });
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res
        .status(404)
        .send({ status: false, msg: "No such user exists" });
    return res.status(200).send({ status: true, data: userDetails });
  } catch (err) {
    return res.status(500).send({ msg: "Server Error" });
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: userData },
      { new: true }
    );
    res.status(200).send({ status: userData, data: updatedUser });
  } catch (err) {
    return res.status(500).send({ msg: "Server Error" });
  }
};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message;
    let user = await userModel.findById(req.params.userId);
    let updatedPosts = user.posts;
    updatedPosts.push(message);
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: user._id },
      { posts: updatedPosts },
      { new: true }
    );
    return res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    {
      return res.status(500).send({ msg: "Server Error" });
    }
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let deletedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: userData },
      { new: true }
    );
    res.status(200).send({ status: true, data: deletedUser });
  } catch (err) {
    {
      return res.status(500).send({ msg: "Server Error" });
    }
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser = deleteUser;
