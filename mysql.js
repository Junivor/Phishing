// Create a Sequelize instance and configure the connection pool
const {Sequelize} = require("sequelize");


const sequelize = new Sequelize('phishing', 'root', '!Abc2004', {
    host: '13.215.175.135',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;