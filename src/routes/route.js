const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController");
const commonMW = require("../middlewares/commonMiddlewares");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.get("/demo1", function (req, res) {
  res.send("This is demo api res no-1");
});

router.get("/demo1", function (req, res) {
  res.send("This is demo api res no-2");
});

router.get("/demo3", function (req, res) {
    res.send("This is demo api res no-3");
});

module.exports = router;
