const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>")
});

app.get("/contact", function(req, res){
    res.send("Contact me at: josh.cinco.3@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Josh Cinco, I am a full-stack web developer.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coding</li><li>Tea</li><li>League of Legends</li></ul>")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});