var express = require('express');
var app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
var cors = require('cors');
var homecontroller = require("./controllers/homecontroller");
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}),);

var whitelist = "http:/144.17.24.16";

var corsOptions={
    origin:function(origin,callback){
      if(whitelist.indexOf(origin)===-1){
        callback(null,true)
      }else{
        console.log("blocked by cors")
        callback(new Error('not allowed by cors'))
      }
    }
  }


app.get('/',cors(corsOptions),(req,res)=>homecontroller.GetRoot(req,res))
app.post('/createhouse',cors(corsOptions),(req,res)=>homecontroller.PostAddHouse(req,res))
app.get('/gethouses',cors(corsOptions),(req,res)=>homecontroller.GetAllHouses(req,res))
app.post('/deletehouse',cors(corsOptions), (req,res)=>homecontroller.PostDeleteHouse(req,res))
app.post('/updatehouse',cors(corsOptions), (req,res)=>homecontroller.PostUpdateHouse(req,res))
var server = app.listen(80, function(){
    console.log("Running on " + 80)
})