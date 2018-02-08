var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
var path = require('path');
// Sets up the Express App
// =============================================================


// app.use(express.static("images"));
app.use(express.static(path.join(__dirname, 'public')));


var PORT = process.env.PORT || 8080;



// function to take a filepath and respond with html
function renderHTML(filePath, res) {
  return fs.readFile(__dirname + filePath, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});