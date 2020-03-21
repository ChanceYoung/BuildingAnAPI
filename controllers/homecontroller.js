var homecontroller = {
    GetRoot: function(req,res){
        let hello = {string:"Hello World"}
        res.write(JSON.stringify(hello))
        res.end()
        console.log(process.env.DB_DATABASE)
    }
}

module.exports = homecontroller;