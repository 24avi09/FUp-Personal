const { count } = require("console");
const { default: mongoose } = require("mongoose");
const orderModel = require("../models/orderModels");
const ProductModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {
  let data = req.body;
  data["isFreeAppUser"] =
    req.headers.isFreeAppUser || req.headers.isfreeappuser;
  let product = data.productId;
  let user = data.userId;
  let Price = await ProductModel.findOne({ _id: product }, { price: 1 });
  let Balance = await userModel.findOne({ _id: user }, { balance: 1 });
  let bal = Balance["balance"];
  let pr = Price["price"];
  if (!user) {
    res.send({ Error: "user detail is requied" });
  } else if (mongoose.isValidObjectId(user) === false) {
    res.send({ Error: "userId is not present " });
  }
  if (!product) {
    res.send({ Error: "product detail is requied" });
  } else if (mongoose.isValidObjectId(product) === false) {
    res.send({ Error: "productId is not present " });
  }
  console.log(data);
  let h = JSON.parse(req.headers.isfreeappuser.toLowerCase());
  if (h) {
    let SavedData = await orderModel.create(data);
    res.send({ msg: SavedData });
  } else if (!h) {
    if (bal < pr) {
      res.send({ Error: "User doesn't have enough balance" });
    }
    let leftBal = bal - pr;
    let balanceUpdate = await userModel.updateOne(
      { _id: user },
      { $set: { balance: leftBal } },
      { new: true }
    );
    data["amount"] = pr;
    let SavedData = await orderModel.create(data);
    res.send({ msg: SavedData });
  }
};

module.exports.createOrder = createOrder;
