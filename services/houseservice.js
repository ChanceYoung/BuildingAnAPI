const mysqlrepository = require('../repositories/mysqlrepository');
const House = require("../models/house")

var houseservice = {
    CreateHouse: async function(house) {
        await mysqlrepository.CreateHouse(house);
    },
    GetAllHouses: async function(){
        var DatabaseResultList = await mysqlrepository.GetAllHouses();
        var HouseList = []
        //console.log(DatabaseResultList[0])
        for(let i = 0; i<DatabaseResultList[0].length; i++){
            let house = await this.DatabaseResultToHouse(DatabaseResultList[0][i]);
            HouseList.push(house)
        }
        return HouseList;
    },
    UpdateHouse: async function(house)
    {
        await mysqlrepository.UpdateHouse(house);
    },
    DeleteHouse: async function(house){
       await mysqlrepository.DeleteHouse(house);

    },
    DatabaseResultToHouse:async function(DatabaseResult){
        console.log(DatabaseResult)
        let house = new House(DatabaseResult["ID"],
                              DatabaseResult["BEDROOMS"],
                              DatabaseResult["BATHROOMS"],
                              DatabaseResult["FLOORS"],
                              DatabaseResult["SQUAREFEET"],
                              DatabaseResult["HOMENAME"])
        return house
    }
}

module.exports = houseservice