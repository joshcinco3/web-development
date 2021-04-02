const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app= express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/7214bdf945" 

    const options = {
        method: "POST",
        auth: "joshC:746bca0615b9771e9f11294099b5b0d1-us1"
    }

    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

// API Key
// 746bca0615b9771e9f11294099b5b0d1-us1

// List Id
// 7214bdf945