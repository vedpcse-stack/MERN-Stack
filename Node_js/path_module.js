const path = require("path")
const fs = require("fs")
/*
console.log(path.dirname("C:/Node_js/script.js"))
console.log(path.basename("C:/Node_js"))
console.log(path.extname("C:/Node_js/path_module.js")) // extation name
console.log(path.parse("C:/Node_js/path_module.js"))
*/


// Asyn 1. from a give exitsing file path extract dir. name using the path module
//   2. create the extraced dir. inside an existing folder using fs module
//   3. extract file name from give path using path module
//   4. create that file inside newly created dir. & write some data into it
//   5. copy the content to this file to another file
//   6. delete the orig. file after coping that content

oldpath = "AA/sample.txt"

dir = path.dirname(oldpath)
filename = path.basename(oldpath)

fs.mkdir(dir,(err) => {
    if (err){
        console.log(err)
    }else{
        console.log("make dir")
        fs.writeFile(dir + "/" + filename , "this is my content" , (err) => {
            if(err){
                console.log(err)
            }else{
                console.log("make file")
                fs.copyFile(oldpath , dir + "/" + "new.txt" , (err) => {
                    if(err){
                        console.log(err)
                    }else {
                        console.log('copy that file')
                        fs.unlink(oldpath , (err) => {
                            console.log("unlink that folder")
                        })
                    }
                    
                })
            }
            
        })
    }
    
})