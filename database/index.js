var mysql = require('mysql')

var connection = mysql.createConnection({
database:'panaderia',
host:'localhost',
user:'',
password:''
})

connection.connect(function(error){
if(error) throw error
console.log("arre con la que barre estamos conectados")
})

module.exports=connection