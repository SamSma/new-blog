/**
 * Created by Administrator on 2017/4/17 0017.
 */
var mongoose = require('mongoose');
var db = require('../db/config.js');
var title = require("./title");

var articleSchema = new mongoose.Schema({
    title : 'string',
    intro  : 'string',
    content : 'string',
    leiList :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'title'
    }
})
var article = db.model('article',articleSchema);


module.exports = article;


