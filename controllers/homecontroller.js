var homecontroller = {
    GetRoot: function(req,res){
        let hello = {string:"Hello World"}
        res.write(JSON.stringify(hello))
        res.end()
    }
}

module.exports = homecontroller;