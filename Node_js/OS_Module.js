const fs = require("fs")
const os = require("os");

console.log(os.arch()) // x64
console.log(os.freemem()) // 1473429504
console.log(os.tmpdir()) // C:\Users\Admin\AppData\Local\Temp
console.log(os.platform()) // win32
console.log(os.hostname()) // Ved

f = os.tmpdir()
let freemem = os.freemem()/1024/1024/1024;

fs.mkdirSync(f + "/AA")

if (freemem > 1 ) {
    fs.writeFileSync(f + "/AA/temp.txt" , "Enough space in mamory")
}else{
    fs.writeFileSync(f + "/AA/temp.txt" , "Low mamory")
}
