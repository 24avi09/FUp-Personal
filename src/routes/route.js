const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBookList", BookController.createBookList  )

router.post("/createAuthorList", BookController.createAuthorList  )

router.post("/getBooksByChatanBhagat", BookController.booksByChatenBhagat  )

router.post("/update", BookController.updatedPrice_And_AuthorName  )

router.post("/bookBetweenPrice", BookController.bookBetweenPrices  )


module.exports = router;
