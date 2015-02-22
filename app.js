/**
 * Created by Lizzie on 22/02/2015.
 */
var express = require("express");
var path = require("path");
var bodyParser=require("body-parser");

var app = express();
app.use(express.static(path.join(__dirname,"")));
app.use(bodyParser.urlencoded({extender:true}));

app.get("/hello", function(request, response) {
    console.log("Responding to /hello");
    response.sendFile(path.join(__dirname, "index.html"));
});

app.post("/booking", function(request, response) {
    console.log("Responding to /booking");
    response.send("Name: " + request.body.name);
});

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Bob's Diner web app listening at http://%s:%s", host, port);

});