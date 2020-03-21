var express = require('express');
var app = express();
require('dotenv').config()
var homecontroller = require("./controllers/homecontroller");

app.get('/',(req,res)=>homecontroller.GetRoot(req,res))


var server = app.listen(80, function(){
    console.log("Running on " + 80)
})