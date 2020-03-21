var express = require('express');
var app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
var homecontroller = require("./controllers/homecontroller");
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

app.get('/',(req,res)=>homecontroller.GetRoot(req,res))
app.post('/createhouse',(req,res)=>homecontroller.PostAddHouse(req,res))
app.get('/gethouses',(req,res)=>homecontroller.GetAllHouses(req,res))
var server = app.listen(80, function(){
    console.log("Running on " + 80)
})