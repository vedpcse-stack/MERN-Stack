import validator from "validator"

// isEmail() --> chack for email
let email = 'test@gmail.com'
console.log(validator.isEmail(email)) // true

email = 'testgmail.com'
console.log(validator.isEmail(email)) // false


// isLowercase()
console.log(validator.isLowercase("hello")) // true
console.log(validator.isLowercase("HELLO1")) // false
console.log(validator.isLowercase("HeLLO")) // false

// isUppercase()
console.log(validator.isUppercase("HELLO")) // true
console.log(validator.isUppercase("hello")) // false
console.log(validator.isUppercase("HeLLO")) // false

// isEmpty()
console.log(validator.isEmpty("hello")) // false
console.log(validator.isEmpty("")) // true
console.log(validator.isEmpty(" ")) // false