const houseservice = require('../services/houseservice')
const House = require("../models/house")


var homecontroller = {
    GetRoot: function(req,res){
        let hello = {string:"Hello World"}
        res.write(JSON.stringify(hello))
        res.end()
    },
    PostAddHouse: async function(req,res){
        req.body.house.id = null;
        let house = this.reqBodyToHouse(req);
        await houseservice.CreateHouse(house);
        res.write(JSON.stringify({status: "Success"}))
        res.end()
    },
    GetAllHouses: async function(req, res){
        var houses = await houseservice.GetAllHouses();
        res.write(JSON.stringify(houses))
        res.end()
    },
    PostUpdateHouse: async function(req,res){
        let house = this.reqBodyToHouse(req);
        await houseservice.UpdateHouse(house);
        res.write(JSON.stringify({status: "Success"}))
        res.end()
    },
    PostDeleteHouse: async function(req, res){
        let house = this.reqBodyToHouse(req);
        await houseservice.DeleteHouse(house);
        res.write(JSON.stringify({status: "Success"}))
        res.end()
    },
    reqBodyToHouse(req){
        let house = new House(req.body.house.id,req.body.house.bedrooms,
            req.body.house.bathrooms,
            req.body.house.floors,
            req.body.house.squarefeet,
            req.body.house.homename)
        return house;
    }
}

module.exports = homecontroller;