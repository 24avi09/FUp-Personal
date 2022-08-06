let trimming = function () {
    const string = "         FunctionUp           "
    console.log("String = "+ string)
    console.log("Trimmed string = "+ string.trim())
}
let lowerCase = function(){
    const string = "         FunctionUp           "
    const stringTrim = string.trim()
    const stringTrimToLowerCase = stringTrim.toLowerCase()
	console.log("Changed to lower case = "+ stringTrimToLowerCase)
    
}
let upperCase = function(){
    const string = "         FunctionUp           "
    const stringTrim = string.trim()
    const stringTrimToUpperCase = stringTrim.toUpperCase()
	console.log("Changed to Upper case = "+ stringTrimToUpperCase)
}
module.exports.trim = trimming
module.exports.changetoLowerCase = lowerCase
module.exports.changetoUpperCase = upperCase