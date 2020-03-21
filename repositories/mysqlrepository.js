const DB_HOST = process.env.DB_IP;
const DB_USER = process.env.DB_USER;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PASSWORD = process.env.DB_PASSWORD;
var mysql = require('mysql2/promise');

var mysqlrepository = {
    getConnection: async function(){
        const con = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_DATABASE
        });
        return con;
    },
    CreateHouse: async function(house){
        const con = await this.getConnection();
        var rows = await con.execute('insert into HOUSE (BEDROOMS,BATHROOMS,FLOORS,SQUAREFEET,HOMENAME) VALUES (?,?,?,?,?)',[house.bedrooms,house.bathrooms,house.floors,house.squarefeet,house.homename]);
        con.end()
        return rows;
    },
    GetAllHouses: async function(){
        const con = await this.getConnection();
        var rows = await con.execute('SELECT * FROM HOUSE');
        con.end()
        return rows;
    },
    DeleteHouse: async function(house){
        const con = await this.getConnection();
        var rows = await con.execute('DELETE FROM HOUSE WHERE ID = ?',[house.id])
        con.end();
        return rows;
    }

}

module.exports = mysqlrepository;