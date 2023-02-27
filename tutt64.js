const fs = require("fs");
let  text = fs.readFileSync("kamil.txt", "utf-8");
text = text.replace("browser" , "kamil");
console.log(text);
console.log("creating a new file...")
fs.writeFileSync("kamil.txt", text);