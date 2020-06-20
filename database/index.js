var mysql = require('mysql')

var connection = mysql.createConnection({
database:'panaderia',
host:'localhost',
user:'frnk',
password:'jesus33.'
})

connection.connect(function(error){
if(error) throw error
console.log("arre con la que barre estamos conectados")
})

module.exports=connection