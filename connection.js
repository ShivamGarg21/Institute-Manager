const mongoose = require('mongoose');

async function connectMongoDb(url) {
    // db connection
    return mongoose.connect(url).then(()=> {
        console.log('mongo db connected');
    }).catch((err) => {
        console.log('failed to initiate mongodb', err)
    });
}

module.exports = {
    connectMongoDb,
};