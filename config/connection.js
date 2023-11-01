// Imports
const { connect, connection } = require('mongoose');

// Creating Database
const connectionString =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB';

//Mongoose and MongoDB connection
connect(connectionString);

//Export
module.exports = connection;