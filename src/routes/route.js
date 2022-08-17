const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.get("/getBooksDataByBookNameAndAuthorNAme", BookController.allBooks)

router.post("/getBooksInYear", BookController.booksInYear)

router.post("/getParticularBooks", BookController.particularBook)

router.post("/getXINRBooks", BookController.bookByINR)

router.post("/getRandomBooks", BookController.random)

module.exports = router;