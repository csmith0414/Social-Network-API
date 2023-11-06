// Import packages
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

//Setup Middleware
app.use(express.urlencoded({ extended: true }));
app.use.apply(express.json());
app.use(routes);

//Setting up server to list for requests and send responses
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}.`)
    });
});