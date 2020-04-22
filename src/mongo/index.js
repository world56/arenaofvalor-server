const db = require('mongoose');

module.exports = app => {

    // 链接数据库
    db.connect('mongodb://127.0.0.1:27017/aov-admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });



};