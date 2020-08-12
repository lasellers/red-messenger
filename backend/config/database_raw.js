const sqlite3 = require('sqlite3').verbose();
console.log(sqlite3);

// obs
let db = new sqlite3.Database('/tmp/redmessenger.db', sqlite3.OPEN_READWRITE, (err) => {
//let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the sqlite database.');
});

/*
var mysql = require('mysql');
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
console.log(con);
 */
module.exports = db;
