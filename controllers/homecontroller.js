const houseservice = require('../services/houseservice')

var homecontroller = {
    GetRoot: function(req,res){
        let hello = {string:"Hello World"}
        res.write(JSON.stringify(hello))
        res.end()
    },
    PostAddHouse: async function(req,res){
        house = req.body.house
        await houseservice.CreateHouse(house);
        res.write(JSON.stringify("kyler"))
        res.end()
    },
    GetAllHouses: async function(req, res){
        var houses = await houseservice.GetAllHouses();
        res.write(JSON.stringify("ahhhh"))
        res.end()
    }
}

module.exports = homecontroller;