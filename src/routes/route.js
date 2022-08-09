const express = require("express");
const myHelper = require("../util/helper");
const underscore = require("underscore");

const router = express.Router();

router.get("/sol1", function (req, res) {
  let arr = [1, 2, 3, 5, 6, 7];
  let missingNumber =
    ((arr.length + 1) * (arr.length + 2)) / 2 - arr.reduce((sum, a) => sum + a);
  res.send({ data: missingNumber });
});

router.get("/sol2", function (req, res) {
  let arr = [33, 34, 35, 37, 38];
  let missingNumber =
    ((arr.length + 1) * (arr[0] + arr[arr.length - 1])) / 2 - arr.reduce((sum, a) => sum + a);
  res.send({ data: missingNumber });
});

module.exports = router;
// adding this comment for no reason
