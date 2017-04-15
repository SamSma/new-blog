/**
 * Created by ma on 17/4/15.
 */
var mongoose =require('mongoose');

mongoose.connect('mongodb://192.168.0.113:27017/blog');
var db = mongoose.connection;

db.on('error',function (err) {
    console.log(err);
})

db.on('open',function () {
    console.log("数据库链接成功")
})


module.exports = db;