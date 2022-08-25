let x = {
    name: "Abhi",
    Lastname: "Yadav",
    address: {
        vill: "Sagarpali",
        dist: "Ballia"
    },
    "address-add": {
        vill: "Sagar",
        dist: "Phephana"
    }
}
console.log(x.name)
console.log(x["name"])
console.log(x["address-add"]["vill"])  // when hyphen is used in th key aways use bracket notations
console.log(x.address.vill)   // dot notation don't understand the name connected with hyphen. The value afte the hyphen dot notation understands as a new value. 
 
//THATHS WHY ALWAYS USE BRACKET NOTATION FOR SAFER SIDE

var a = 20
{
    var a = 100
    
console.log(a)
}
console.log(a)



// "name": "Sabiha Khan",
// "balance":100, // Default balance at user registration is 100
// "address":"New delhi",
// "age": 90,
//  "gender": "female", // Allowed values are - “male”, “female”, “other”