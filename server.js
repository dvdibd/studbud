//import express package
const express = require('express');

//initialise express framework
const app = express();

//Serve static files from folder
app.use(express.static('public'));

//Serve index file for root("/") path
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

//start the server
let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
});

   

