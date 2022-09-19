const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memeController")
const helo = require("../controllers/hello")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getByDistrictId", CowinController.getByDistrictId)

// weather api
router.get("/weather/getTemp", WeatherController.getTemp)

//post meme API
router.get("/getmemes", MemeController.getmeme)

router.post("/memeEditing", MemeController.memeEdit)


router.get("/hello", helo.hello )

module.exports = router;