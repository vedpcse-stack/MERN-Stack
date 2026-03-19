const { count } = require("console");
const fs = require("fs");

/*
let obj = [
  {
    name: "Circle",
    diameter: 10,
  },
  {
    name: "square",
    side: 8,
  },
];

fs.writeFileSync( "temp.txt" ,  JSON.stringify(obj) )

let data = fs.readFileSync("temp.txt" , "utf-8")
data = JSON.parse(data)

let para_cir = (data[0].diameter / 2) * 2 * 3.14;
let para_sqr = 4 * data[1].side;

fs.appendFileSync("temp.txt" , "\ncircle para : " + para_cir + "sqr para : " + para_sqr)

console.log(para_sqr);
console.log(para_cir);
*/

// 1.write below obj in f2.txt file
/*
let obj = {
  d : {
    a : 10,
    b : 20 , 
    c : [30,10]
  }
}
fs.writeFileSync("f2.txt" , JSON.stringify(obj))
//2.read data from the same file & perform following
  // a. addi. of a & b
  // b. sub of 2nd ele. of c & b (must be a +ve number)
  // c. mul of elem of c
let data = fs.readFileSync("f2.txt" , "utf-8")
data = JSON.parse(data)

let add = data.d.a + data.d.b
let sub = Math.abs(data.d.c[1] - data.d.b)
let mul = data.d.c[0]*data.d.c[1]

// 3. add output of add. , sub & mul in f2.txt filr
fs.appendFileSync("f2.txt" , "\nAddition : " + add + "\nsubtraction : " + sub + "\nmul : " + mul)
*/

// to copy containt of one file to another file , data should be fatch from sourse.txt & insert to des.txt & read data from des file at end , perfome all this task Asyns.
/*
fs.writeFile("sourse.txt", "this is my content", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("sourse.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile("des.txt", data, (err) => {
          if (err) {
            console.log(err);
          } else {
            fs.readFile("des.txt", "utf-8", (err, data1) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data1);
              }
            });
          }
        });
      }
    });
  }
});
*/
/*
fs.writeFile("sourse.txt", "hello", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.copyFile("sourse.txt", "des.txt", (err) => {
      if (err) {
        console.log(err);
      } else {
        fs.readFile("des.txt", "utf-8", (err, data1) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data1);
          }
        });
      }
    });
  }
});
*/

// PB : 85
// Write a NodeJS program to create a file named test.txt containing the
// initial text "Exam attempt ". Then, it should add three more lines to
// the file: "Entry 1: Pass", "Entry 2: Fail", and "Entry 3: Pass".
// After writing, the program must read the file and count how many
// times the word "Pass" appears and if the word "Pass" appears three or
// more times, the program should erase the content inside test.txt.
/*
fs.writeFileSync("test.txt" , "Exam attemp :")

fs.appendFileSync("test.txt" , "\nEntry 1 : Pass\nEntry 2 : Fail\nEntry 3 : Pass")

data = fs.readFileSync("test.txt" , "utf-8")

temp = data.split("\n")
let count_ele = 0

for (let i = 1 ; i < temp.length ; i++){
  st = temp[i].split(" : ")
  if (st[1] === "Pass"){
    count_ele++
  }
}

if (count_ele >= 3 ){
  fs.writeFileSync("test.txt" , "")
}
*/

// write text "u are creating a file" to help.txt , after that append the text "u are appending the data" to same file , after that read that file & print data to console , after finish read op. copy that content of help.txt file to help2.txt after finishing copy op. print the line "thank for using this programm"

fs.writeFile("help.txt" , "u are creating a file" , (err) => {
  if (err) {
    console.log(err);
  }else{
    console.log("file writen")
    fs.appendFile("help.txt" , ",u are appending the data" , (err) => {
      if (err) {
        console.log(err);
      }else{
        console.log("file appended")

        fs.readFile("help.txt" , "utf-8" , (err , data) => {
          if (err) {
            console.log(err);
          }else{
            console.log(data)

            fs.copyFile("help.txt" , "help2.txt" , (err) => {
              if (err) {
                console.log(err);
              }else{
                console.log("file copied")

                console.log("thank for using this programm")
              }
            })
          }
        })
      }
    })
  }
})