/* --> method 1

const add = (a,b) => a + b ;
module.exports = add; 
*/



/* --> method 2

const add = (a,b) => a + b ;
const sub = (a,b) => a - b;

module.exports.a = add; 
module.exports.s = sub; 
*/



/* --> method 3

const add = (a,b) => a + b ;
const sub = (a,b) => a - b;

module.exports.a = add; 
module.exports.s = sub; 
*/




/* --> method 4

const add = (a,b) => a + b ;
const sub = (a,b) => a - b;
const name = "Ved"

module.exports = {add,sub,name}
*/




exports.add = (a,b) => a + b;
exports.sub = (a,b) => a - b;
exports.name = "Ved"