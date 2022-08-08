const express = require("express");
const router = express.Router();

router.get("/movies", function (req, res) {
  let movies = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];
  res.send(movies);
});


router.get("/movies/:indexNumber", function (req, res) {
  let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins",];
  let requestParams = req.params;
  let numReqParms = parseInt(requestParams.indexNumber);
  // let resPonse = (typeof numReqParms === "number" && numReqParms < movies.length ) ? res.send(movies[numReqParms]) : res.send("Error: Use a valid index");
  // res.send(resPonse)
  if (typeof numReqParms === "number" && numReqParms < movies.length) {
    res.send(movies[numReqParms]);
  } else res.send("Error: Use a valid index");
});


router.get("/films", function (req, res) {
  const ArrayOfObject = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];
  res.send(ArrayOfObject);
});


router.get("/films/:filmId", function (req, res) {
    let resPonse 
  const ArrayOfObject = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];
  let requestParams = req.params;
  let numReqParms = parseInt(requestParams.filmId);
  for (let i = 0; i < ArrayOfObject.length; i++) {
    if (typeof numReqParms === "number" && numReqParms == ArrayOfObject[i].id) {
        resPonse = (ArrayOfObject[i].name);
        break
      } else { resPonse = "No movie exists with this id" ;}
  }
    res.send(resPonse)
});


module.exports = router;