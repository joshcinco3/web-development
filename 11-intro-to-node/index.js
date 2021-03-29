// const fs = requires("fs");

// fs.copyFileSync("file1.txt", "file2.txt")

var superheroes = require("superheroes");
const supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log(mySuperheroName);
console.log(mySupervillainName);
