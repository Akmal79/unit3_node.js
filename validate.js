const validator = require('validator') //package
var email ="a@gmail.com"
console.log(validator.isEmail(email))

var name = "pesu"
console.log(validator.isLowercase(name))

var empty = ""
console.log(validator.isEmpty(empty))
