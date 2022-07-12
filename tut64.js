const fs = require("fs");
let  text = fs.readFileSync("farhan.html" , "utf-8");
text = text.replace("content", "Kamil");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("kamil.txt", text);