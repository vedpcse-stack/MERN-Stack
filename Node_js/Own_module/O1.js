"write name of variable like you send from js file"

/* --> method 1

const a = require("./O2")  
console.log(a(2,4)) --> 6
*/



/* --> method 2

const o = require("./O2")

console.log(o.a(2,4))
console.log(o.s(2,4))
*/




/* --> method 3

const { a , s } = require("./O2")

console.log(a(2,4))
console.log(s(2,4))
*/


/* --> method 4

const { add , sub , name } = require("./O2")

console.log(add(2,4))
console.log(sub(2,4))
console.log(name)


--> const o = require("./O2")

console.log(o.add(2,4))
console.log(o.sub(2,4))
console.log(o.name)
console.log(o) --> { add: [Function: add], sub: [Function: sub], name: 'Ved' }
*/


/* --> method 5


const obj = require("./O2")

console.log(obj.add(2,4))
console.log(obj.sub(2,4))
console.log(obj.name)
console.log(obj)

*/
