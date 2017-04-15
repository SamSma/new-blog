/**
 * Created by ma on 17/4/15.
 */
var mongoose = require('mongoose');
var db = require('../db/config.js');

var userSchema = new mongoose.Schema({
    name  : 'string',
    password :'string'
});


var User = db.model('User',userSchema);


module.exports = User;



