const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');

console.info('DB_DATABASE',process.env.DB_DATABASE);
console.info('DB_USERNAME',process.env.DB_USERNAME);
console.info('DB_PASSWORD',process.env.DB_PASSWORD);
console.info('DB_HOST',process.env.DB_HOST);
console.info('DB_STORAGE',process.env.DB_STORAGE);

const db = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE,
    host: process.env.DB_HOST,
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
