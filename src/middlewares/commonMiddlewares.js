const mid1 = function (req, res, next) {
  let data = req.headers;
  let header = data["isfreeappuser"] || data["isFreeAppUser"];
  if (!header) {
    return res.send({
      status: false,
      Error: "isFreeAppUser is a mandatory field",
    });
  }
  next();
};

module.exports.mid1 = mid1;
