const UserModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  data["isFreeAppUser"] =
    req.headers.isFreeAppUser || req.headers.isfreeappuser;
  let SavedData = await UserModel.create(data);
  res.send({ msg: SavedData });
};

module.exports.createUser = createUser;
