/**
 * Created by Administrator on 2017/4/16 0016.
 */
var mongoose = require("mongoose");
var db = require("../db/config");

var titleSchema = new mongoose.Schema({
    title : 'string'
});

var title = db.model('title',titleSchema);


module.exports = title;

