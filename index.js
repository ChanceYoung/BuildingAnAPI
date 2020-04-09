var express = require('express');
var app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
var cors = require('cors');
var homecontroller = require("./controllers/homecontroller");
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}),);

app.get('/',cors(),(req,res)=>homecontroller.GetRoot(req,res))
app.post('/createhouse',cors(),(req,res)=>homecontroller.PostAddHouse(req,res))
app.get('/gethouses',cors(),(req,res)=>homecontroller.GetAllHouses(req,res))
app.post('/deletehouse',cors(), (req,res)=>homecontroller.PostDeleteHouse(req,res))
app.post('/updatehouse',cors(), (req,res)=>homecontroller.PostUpdateHouse(req,res))
var server = app.listen(80, function(){
    console.log("Running on " + 80)
})