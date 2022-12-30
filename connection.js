const mysql = require('mysql2')

var mysqlConnection = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10587295",
    password: "8GQB5qTHjq",
    database: "sql10587295",
    multipleStatements: true
});

mysqlConnection.connect((err) =>{
    if(!err){
        console.log("conectado");
    }
    else{
        console.log("erro ao conectar! " + err);
    }
})

module.exports = mysqlConnection;
