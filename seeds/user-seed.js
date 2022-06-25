const { User } = require('../models')

const userData = [
    {
        "username": "suedepritch",
        "email": "james.edward.pritchard@gmail.com",
        "password": "password1234"
    },
    {
        "username": "mikkyD",
        "email": "mikeDonald@gmail.com",
        "password": "password1234"
    },
    {
        "username": "SWrighter",
        "email": "SarahWhitman@gmail.com",
        "password": "password1234"
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;