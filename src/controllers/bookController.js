const { count } = require("console");
const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/autherModel");

const createBookList = async function (req, res) {
  let data = req.body;
  let savedBookData = await BookModel.create(data);
  res.send({ msg: savedBookData });
};



const createAuthorList = async function (req, res) {
  let data = req.body;
  let savedAuthorData = await AuthorModel.create(data);
  res.send({ msg: savedAuthorData });
};



const booksByChatenBhagat = async function (req, res) {
  let authorIdOfChatenBhagat = await AuthorModel.findOne({        //  {}
    author_name: "Chetan Bhagat",
  }).select({ author_id: 1, _id: 0 });
  // console.log(authorIdOfChatenBhagat);
  let bookByChatenBhagat = await BookModel.find(authorIdOfChatenBhagat);    //  [{},{}]
  // console.log(bookByChatenBhagat);
  res.send({ msg: bookByChatenBhagat });
};



const updatedPrice_And_AuthorName = async function (req, res) {
  const update = await BookModel.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },
    { new: true } // res send is updated 
  );
  let updatedPrice = await BookModel.findOne(update).select({
    price: 1,
    _id: 0,
  });
  // console.log(updatedPrice);
  const authorName = await AuthorModel.findOne({
    author_id: update.author_id,
  }).select({ author_name: 1, _id: 0 });
  // console.log(authorName);
  res.send({ AuthorName_And_UpdatedPrice: authorName, updatedPrice });
};



const bookBetweenPrices = async function (req, res) {
  const autherIdOfRange = await  BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1, _id: 0})
  // console.log(updat);
  const arrOfAuthorId = autherIdOfRange.map(  x => x.author_id)
  // console.log(arrOfAuthorId);
  let authorNames =  await AuthorModel.find( {author_id : arrOfAuthorId}).select({author_name: 1, _id: 0})
  // console.log(authorNames);
  res.send({msg: authorNames});
}


module.exports.createBookList = createBookList;
module.exports.createAuthorList = createAuthorList;
module.exports.booksByChatenBhagat = booksByChatenBhagat;
module.exports.updatedPrice_And_AuthorName = updatedPrice_And_AuthorName;
module.exports.bookBetweenPrices = bookBetweenPrices;
