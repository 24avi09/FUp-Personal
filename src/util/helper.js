let dateMonth = function(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let today = new Date()
let dd = today.getDate()
let mm = today.getMonth()+1
let mmString = monthNames[ mm-1]
let yyyy = today.getFullYear()
console.log("Today's date is"+" "+dd +'/'+mm+'/'+yyyy)
console.log ("Todays month is"+" "+mmString)
}
const batchName = "Plutonium";
let batch = function(){
    console.log("Batch name is",batchName,"today is Week-3 Day-5, the topic for today is Nodejs module system")
}
module.exports.funDateMonth = dateMonth
module.exports.funBatchInfo = batch
