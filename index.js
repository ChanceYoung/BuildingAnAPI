var express = require('express');
var app = express();


app.get('/', function(req, res){
    let hello = {string:"Hello World"}
    res.write(JSON.stringify(hello))
    res.end()
})


var server = app.listen(80, function(){
    console.log("Running on " + 80)
})