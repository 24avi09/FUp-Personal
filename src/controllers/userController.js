const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBookDetails= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBookDetails= getBookDetails