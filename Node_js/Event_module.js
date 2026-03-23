const events = require('events');
var eventEmitter = new events();
const fs = require("fs")


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

/*
eventEmitter.on("-ve_value" , (x)=> {
    console.log("-ve" , x)
})

eventEmitter.on("circle",(x)=>{
    if (x < 0) {
        eventEmitter.emit("-ve_value" , "radius")
    }else{
        console.log("para of cir :",x * Math.PI * 2)
    }
})
eventEmitter.on("sqr",(x)=>{
    if (x < 0) {
        eventEmitter.emit("-ve_value" , "side")
    }else{
        console.log("para of sqr :",4 * x)
    }
})

eventEmitter.emit("circle" , 10)
eventEmitter.emit("sqr" , 8)
*/

// code to handle event that write data , append data & then read that file , display data in console , do all the operation using Async file system module

/*
eventEmitter.on("append" , (data) =>{
    fs.appendFile("text.txt" , data , (err) => {
        if (err) {
            console.log(err)
        }else{
            eventEmitter.emit("read")
        }
    })
})
eventEmitter.on("read" , () => {
    fs.readFile("text.txt" , "utf-8" , (err , data) => {
        if (err) {
            console.log(err)
        }else{
            console.log(data)
        }
    })
})
eventEmitter.on("write" , (data) => {
    fs.writeFile("text.txt" , data , (err) => {
        if (err) {
            console.log(err)
        }else{
            eventEmitter.emit("append" , " world")
        }
    })
})
eventEmitter.emit("write" , "hello")
*/

// write node js script using event handling to perform following
// 1. create folder , named ABC
// 2. create a file named XYZ.txt & write data into it
// 3. apppend data to that file & print massage , data append succ.
// 4. read the content of file & print on console
// 5. copy content from XYZ to PQR.txt
// 6. delete the file XYZ.txt & print the massege , all operation perform succ. do all this operation of using Sync file system

/*
eventEmitter.on("dir" , () => {
    if (fs.existsSync("ABC")){
        console.log("dir already exist")
    }else{
        fs.mkdirSync("ABC")
    }
    eventEmitter.emit("write")
})
eventEmitter.on("write" , () => {
    fs.writeFileSync("ABC/XYZ.txt" , "hello")
    eventEmitter.emit("append")
})
eventEmitter.on("append" , () => {
    fs.appendFileSync("ABC/XYZ.txt" , " world")
    console.log("data append succ.")
    eventEmitter.emit("read")
})
eventEmitter.on("read" , () => {
    data = fs.readFileSync("ABC/XYZ.txt" , "utf-8")
    console.log(data)
    eventEmitter.emit("copy")
})
eventEmitter.on("copy" , () => {
    fs.copyFileSync("ABC/XYZ.txt" , "ABC/PQR.txt")
    console.log("copy succ.")
    eventEmitter.emit("delete")
})
eventEmitter.on("delete" , () => {
    fs.unlinkSync("ABC/XYZ.txt")
    console.log("all operation perform succ.")
})
eventEmitter.emit("dir")*/


//Write a function 'ArrayToObject' which takes in an array of arrays,
// and returns an object with each pair of elements in the array as a keyvalue pair and store the result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country : ' India ', State : ' Gujarat ', City :
// ‘Ahmedabad’ }
/*
Input= [['Country', 'India'], ['State', 'Gujarat'], ['City', "Ahmedabad"]]
obj = {}

for (let i = 0 ; i < Input.length ; i++){
    obj[Input[i][0]] = Input[i][1]
}

fs.writeFileSync("arraytoobject.txt" , JSON.stringify(obj))
*/


/* --> 75
Write a Node.Js program for following action
1.	Write a file having five random elements separated by white
space in .txt file.
2.	append sorted array of these 5 elements in same file along with
message : “Sorted array:” in new line.
3.	Find maximum number from that and append with message
“maximum number=” in same file
*/

/*
fs.writeFileSync("Q75.txt" , "1 6 2 9 4")
data = fs.readFileSync("Q75.txt" , "utf-8")
arr = data.split(" ")
arr.sort((a,b) => a - b)

fs.appendFileSync("Q75.txt" , "\nSorted array : " + arr)
fs.appendFileSync("Q75.txt" , "\nmaximum number : " + Math.max(...arr))
*/

/* --> 88
Write a script to define two JSON objects named as “division1” and
“division2” having an array to store 5 integer numbers. Write this
object in a file named XYZ.txt using file system. Define third array
as result which gives output as explained below: Suppose first array
contains base value and second array contains power value and then
third array will give output as: a^b.For example: first array[0]=2 and
second array[0]=3 then it should return 8 in third array[0] .Also
append this result in XYZ.txt and as well as on console.
*/

division1 = [0,1,2,3,4]
division2 = [5,3,8,5,2]

result = []

for (let i = 0 ; i < division1.length ; i++){
    result.push(Math.pow(division1[i] , division2[i]))
}

fs.writeFileSync("Q88.txt" , JSON.stringify(result))
console.log(result)