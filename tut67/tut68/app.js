const express = require("express");

const app = express();
const port = 80;

app.get("/",(req, res)=>{
   res.send("This is my firsthomepage express app with Kamil")  
});
app.get("/about",(req, res)=>{
    res.send("This is my aboutpage express app with Kamil")  
 });
 app.post("/about",(req, res)=>{
    res.send("This is my aboutpage express app with Kamil")  
 });

app.listen(port, ()=>{
    console.log(`The application started succesfully on port ${port}`)
})