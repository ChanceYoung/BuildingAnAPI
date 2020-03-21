const mysqlrepository = require('../repositories/mysqlrepository');

var houseservice = {
    CreateHouse: async function(house) {
        await mysqlrepository.CreateHouse(house);
    },
    GetAllHouses: async function(){
        var rows = await mysqlrepository.GetAllHouses();\
        console.log(rows[0])
        if(typeof rows[0][0] != 'undefined'){

        }else{
            console.log(rows[0])
        }

    }
}

module.exports = houseservice