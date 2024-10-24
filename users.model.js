
const sequelize = require("./mysql")
const {DataTypes} = require("sequelize");

// Define the User model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: true,
});

// Sync the model with the database (creates the table if it doesn't exist)
sequelize.sync()
    .then(() => {
        console.log('User table has been created.');
    })
    .catch(err => {
        console.error('Error creating table:', err);
    });

module.exports = User;