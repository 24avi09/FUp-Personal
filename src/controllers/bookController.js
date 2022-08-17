const { count } = require("console");
const bookModel = require("../models/bookModel");
const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let requiredData = req.body;
  let savedData = await BookModel.create(requiredData);
  res.send({ msg: savedData });
};

const allBooks = async function (req, res) {
  let allBook = await BookModel.find().select({
    bookName: 1,
    authorName: 1,
    _id: 0,
  });
  res.send({ msg: allBook });
};

const booksInYear = async function (req, res) {
  let requestedBookYear = req.query.year;
  let yearBook = await BookModel.find({ year: requestedBookYear });
  res.send({ msg: yearBook });
};

const particularBook = async function (req, res) {
  let requestPerticularBook = req.body;
  let specificBook = await BookModel.find({
    $or: [
      { bookName: requestPerticularBook.bookName },
      { authorName: requestPerticularBook.authorName },
      { "price.indianPrice": requestPerticularBook.indianPrice },
      { "price.euroPrice": requestPerticularBook.euroPrice },
      { year: requestPerticularBook.year },
      { tags: requestPerticularBook.tags },
      { totalPages: requestPerticularBook.totalPages },
      { stockAvailabe: requestPerticularBook.stockAvailabe },
    ],
  });
  res.send({ msg: specificBook });
};

const bookByINR = async function (req, res) {
  let savedbyINR = await BookModel.find({
    $or: [
      { "price.indianPrice": "100INR" },
      { "price.indianPrice": "200INR" },
      { "price.indianPrice": "500INR" },
    ],
  });
  res.send({ msg: savedbyINR });
};

const random = async function (req, res) {
  let randomRes = await BookModel.find({
    $or: [{ stockAvailabe: true }, { totalPages: { $gt: 500 } }],
  });
  res.send({ msg: randomRes });
};

module.exports.createBook = createBook;
module.exports.allBooks = allBooks;
module.exports.booksInYear = booksInYear;
module.exports.particularBook = particularBook;
module.exports.bookByINR = bookByINR;
module.exports.random = random;
