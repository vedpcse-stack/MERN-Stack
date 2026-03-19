const fs = require("fs");

// fs.mkdirSync("node");

// fs.writeFileSync( "node/write.txt" , "Be kind" )

// fs.appendFileSync( "node/write.txt" , " to everyone" )

// console.log(  fs.readFileSync( "node/write.txt")  )  -->  <Buffer 42 65 20 6b 69 6e 64 20 74 6f 20 65 76 65 72 79 6f 6e 65>
// console.log(  fs.readFileSync( "node/write.txt" , "utf-8")  )  --> ⚠️Be kind to everyone
// console.log(  fs.readFileSync( "node/write.txt").toString()  )  --> ⚠️Be kind to everyone

// fs.renameSync( "node/write.txt" , "node/write2.txt")

// fs.unlinkSync( "node/write2.txt")

// fs.rmdirSync( "node")

// read data from file & arrange that data from acce. order
/*
fs.writeFileSync("temp.txt" , "50 -1 99 100 0 56 87 59")

let data = fs.readFileSync("temp.txt" , "utf-8")

arr = data.split(" ")
console.log(arr)

d = arr.sort(  (a,b) => {
    return a-b
} )
console.log(d) */
/*
fs.writeFile( "A.txt" , "Hello" , (err) =>{
    if (err) {
        console.log("error : " , err)
    }else{
        console.log("file created")
    }
    console.log("w Operation")
})
console.log("outside") */

// write data to file , append data to file & then reading that data using callback
/*
fs.writeFile("B.txt", "Hello", (err) => {
  if (err) {
    console.log("error : ", err);
  } else {
    console.log("created");

    fs.appendFile("B.txt", " World", (err) => {
      if (err) {
        console.log("error : ", err);
      } else {
        console.log("appended");

        fs.readFile("B.txt", "utf-8", (err,data) => {
          if (err) {
            console.log("error : ", err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
*/

// write node js script to write an arr of object with prop. cricketer name & it's number in a file crickerer.txt then read that file & display in console

a = [
    {
        "name" : 'virat',
        "run" : 82
     },
    {
        "name" : 'rohit',
        "run" : 92
     },
    {
        "name" : 'dhoni',
        "run" : 91
     }
]

temp = JSON.stringify(a)

fs.writeFileSync( "cricketer.txt" , temp)

d = fs.readFileSync("cricketer.txt" , "utf-8")

console.log(d.split(","))