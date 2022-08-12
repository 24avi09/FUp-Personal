const express = require("express");
const router = express.Router();

let persons = [
  {
    name: "PK",
    age: "17",
    votingStatus: false
  },
  {
    name: "SK",
    age: "28",
    votingStatus: false
  },
  {
    name: "SC",
    age: "32",
    votingStatus: false
  },
  {
    name: "AA",
    age: "40",
    votingStatus: false
  },
  {
    name: "HO",
    age: "12",
    votingStatus: false
  },
  {
    name: "FI",
    age: "22",
    votingStatus: false
  },
];

router.post("/votingList", function(req,res){
  let votingAge = req.query.age
  let arr = []
  persons.filter( votingPersons => (votingPersons.age > votingAge) ? (votingPersons.votingStatus = true, arr.push(votingPersons)  ): "else" ) 
  res.send({data: arr, status: true})
})
module.exports = router;