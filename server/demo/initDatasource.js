const mongoose = require('mongoose');

module.exports = function () {
    // 链接mongo
    mongoose.connect('mongodb://127.0.0.1:27017/db_demo');

    mongoose.connection.on('connected', () => {
        console.log('Mongodb connected')
    })

    mongoose.connection.on('error', () => {
        console.log('Mongodb connect error')
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Mongodb disconnected')
    })
}