const http = require('http');
const mysql = require('mysql');
const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
}




var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
  //only after database created
  database: "biblioteczka"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("CREATE DATABASE biblioteczka", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });

con.query("CREATE TABLE ksiazki (ks_id INT AUTO_INCREMENT PRIMARY KEY, ks_title VARCHAR(255), ks_auth_id VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });


var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);