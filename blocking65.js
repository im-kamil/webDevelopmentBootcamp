// Synchronous or blocking - line by line execution
// A synchronous or non-blocking - line by line execution not guaranteed , Callbacks will fire 
const fs = require("fs");
let  text = fs.readFile("farhan.html" , "utf-8", (error, data)=>{
    // console.log( data);
});
console.log("This is a message");