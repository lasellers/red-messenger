const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');
const db = new Sequelize({
    dialect: 'sqlite',
    storage: '/tmp/redmessenger.sqlite',
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
//console.log(sequelize);

db.authenticate()
    .then(() => console.log('Connection has been established successfully. (2)'))
    .catch((err) => console.error('Unable to connect to the database: (2)', err))
;

module.exports = db;


/*
var mysql = require('mysql');
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
console.log(con);
 */

/*try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}*/
