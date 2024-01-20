const express = require("express");
const hbs = require("hbs");
const path = require("path");
const http = require('http');
const mysql = require('mysql');
const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/templates/views"));
hbs.registerPartials(path.join(__dirname, "/templates/partials"));

var con = mysql.createConnection({
  host: "localhost",
  user: "biblioteczka",
  password: "biblioteczka123",
  database: "baza_biblioteczka"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
    var sql_full_list = 'SELECT bk_title, aut_name, aut_surname FROM books join authors on bk_aut_id=aut_id';
        con.query(sql_full_list, function (err, result, fields) {
           if (err) throw err;
           var full_result=result;
           console.log(full_result);
            res.render("index", {
        title: "Biblioteczka",
        full_list: full_result
    });
    });


});
app.get("/dodaj", (req, res) => {
    res.render("dodaj", {
        title: "Dodaj książkę"
    });
});
app.get("/wyszukaj", (req, res) => {
    res.render("wyszukaj", {
        title: "Wyszukaj"
    });
});
app.listen(3000, () => {
    console.log("Listening on port 3000");
});