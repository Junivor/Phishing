// Create a Sequelize instance and configure the connection pool
const {Sequelize} = require("sequelize");
const host = process.argv[2]

const sequelize = new Sequelize('phishing', 'root', '!Abc2004', {
    host,
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