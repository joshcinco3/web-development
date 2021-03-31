const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Oakland&appid=590e5f3d033d4135ec2f155491c8c5f6&units=imperial";

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(temp);
            console.log(weatherDescription);
        });

    });

    res.send("Server is up and running.");
});

app.listen(3000, function() {
    console.log("Sever is running on port 3000.");
});