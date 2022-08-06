const batchName = "Plutonium";

let printName = function () {
  console.log("Batch name is ", batchName);
};
module.exports.name = batchName; // name = public name  of const batchName(private name of const only for this page )
module.exports.funcname = printName; // funcname = public name of function printName(private name of function)
