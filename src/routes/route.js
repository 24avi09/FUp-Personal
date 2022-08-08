const express = require('express');
const lodash = require('lodash')
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
//<<<<<<< Updated upstream
//=======
    welcome.funWelcome()
    dateMon.funDateMonth()
    dateMon.funBatchInfo()
    stringEdit.trim()
    stringEdit.changetoLowerCase()
    stringEdit.changetoUpperCase()
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    let arrayOfThree = lodash.chunk(monthNames,3)
    console.log( "lodash.chunk is diving the above array in 4 sub-arrays and providing them in a array =>", arrayOfThree)
    const firstTenOddNum = [1,3,5,7,9,11,13,15,17,19]
    let lastNineNumOfFirstTenOddNum = lodash.tail(firstTenOddNum)
    console.log( "lodash.tail is proving all the numbers except 1st number from the above array =>", lastNineNumOfFirstTenOddNum)
    const arr1 = [1,2,3,4]
    const arr2 = [3,4,5,6]
    const arr3 = [1,4,5,7]
    const arr4 = [2,6,7,9]
    const arr5 = [1,5,7,11]
    let union = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log( "lodash.union is giving the unique numbers from the above 5 arrays =>", union)
    const ar1 = ["horror","The Shining"]
    const ar2 = [ "drama","Titanic"] 
    const ar3 = ["thriller","Shutter Island"]
    const ar4 = ["fantasy","Pans Labyrinth"]
    let pairs = lodash.fromPairs([ar1,ar2,ar3,ar4])
    console.log( "lodash.fromPairs is pairing arrays into object =>",pairs)
//>>>>>>> Stashed changes
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason