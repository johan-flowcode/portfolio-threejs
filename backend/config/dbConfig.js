

const mongoose = require('mongoose');

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Error connecting to database');
});

connection.on('connected', () => {
    console.log('MongoDB is connected successfully!');

});

module.exports = connection;
