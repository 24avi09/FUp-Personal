const { count } = require("console");
const ProductModels = require("../models/productModel");

const createproduct = async function (req, res) {
  let data = req.body;
  let SavedData = await ProductModels.create(data);
  res.send({ msg: SavedData });
};

module.exports.createproduct = createproduct;
