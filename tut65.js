const fs = require("fs");
let text = fs.readFile("kamil.txt", "utf-8", (err,data)=>{
    console.log(err,data);
});
console.log("this is a message");