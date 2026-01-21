const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');
const config = require('config');


mongoose.connect(config.get('MONGO_URI')) 
    .then(() => {
        dbgr('Connected to MongoDB successfully');
    })
    .catch((err) => {
        dbgr('Error connecting to MongoDB:', err);
    });

module.exports = mongoose.connection;