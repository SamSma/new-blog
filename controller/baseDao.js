/**
 * Created by ma on 17/4/15.
 */
var base={};
//保存数据
base.save = function (bean,obj) {
    var Info = require('./../model/'+bean);

    var baseinfo = new Info(obj);
    baseinfo.save();
}
//查询obj
base.findOne = function (bean,obj,callback) {
    var Info = require('./../model/'+bean);
    Info.findOne(obj,callback);
}








module.exports = base;