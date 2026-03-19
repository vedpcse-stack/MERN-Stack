const events = require('events');
var eventEmitter = new events();
/*
eventEmitter.on('my_event', () => {
  console.log('data received successfully.');
});
eventEmitter.emit('my_event');
*/

/*
eventEmitter.on("front" , (start,end) => {
    console.log("started from " ,start , " to " , end)
})
eventEmitter.emit("front" , 1,200)
*/


// write a node js programm using the events modules to summ. a sequence of event
// 1. when a connection event occure print connection succ. & trigger data recived event
// 2. when data recive event occure print data data recived succe. 
// 3. finnaly print thanks at the end of excution

/*
eventEmitter.on("connection" , () => {
    console.log("connection succ.")
    eventEmitter.emit("data_recive")
})

eventEmitter.on("data_recive" , ()=>{
    console.log("data recived succ.")
    console.log("thanks")
})
eventEmitter.emit("connection")
*/

// 1. (myevent1 , myevent2)
// 2. removeing spec. eventListener for myevent2
// 3. removing all listener accocited with myevent1
// 4. triggiring event & observing which listener excute

/*
fun1 = (msg) => {
    console.log("massage from fun1 :" , msg)
}
fun2 = (msg) => {
    console.log("massage from fun2 :" , msg)
}
eventEmitter.on("myevent1" , fun1)
eventEmitter.on("myevent1" , fun2)
eventEmitter.on("myevent2" , fun1)
eventEmitter.on("myevent2" , fun2)

eventEmitter.removeAllListeners("myevent1")
eventEmitter.removeListener("myevent2" , fun2)

eventEmitter.emit("myevent1" , "LJ")
eventEmitter.emit("myevent2", "uni")*/

// make 2 listener for a common event , print number of events acco with an emmiter 
// remove one on the listener & call remaining listener again
// also print number of remaing listener
// at end remove all listener & count the listener again

/*
fun1 = (msg) => {
    console.log("massage from fun1 :" , msg)
}
fun2 = (msg) => {
    console.log("massage from fun2 :" , msg)
}
eventEmitter.on("myevent" , fun1)
eventEmitter.on("myevent" , fun2)

console.log("count :",eventEmitter.listenerCount("myevent"))

eventEmitter.removeListener("myevent" , fun2)

console.log("count :",eventEmitter.listenerCount("myevent"))

eventEmitter.removeAllListeners("myevent")
console.log("count :",eventEmitter.listenerCount("myevent"))
*/


// 1. check the radius is -ve or not
// 2. if -ve then display radius must be +ve
// 3. else cal. para of circle
// 4. chech side if -ve or not if .....

eventEmitter.on("circle",(x)=>{
    if (x < 0) {
        console.log("-ve radius")
    }else{
        console.log("para of cir :",x * Math.PI * 2)
    }
})
eventEmitter.on("sqr",(x)=>{
    if (x < 0) {
        console.log("-ve side")
    }else{
        console.log("para of sqr :",4 * x)
    }
})

eventEmitter.emit("circle" , 10)
eventEmitter.emit("sqr" , 8)