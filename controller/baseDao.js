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
//查询obj一个
base.findOne = function (bean,obj,callback) {
    var Info = require('./../model/'+bean);
    Info.findOne(obj,callback);
}
//id查询
base.findbyId = function (bean,id,callback) {
    var Info = require('./../model/'+bean);
    Info.findbyId(id,callback);
}
//修改
base.update = function (bean,obj,update,callback) {
    var Info = require('./../model/'+bean);
    Info.update(obj,update,callback);
}
//删除
base.remove = function (bean,obj,callback) {
    var Info = require('./../model/'+bean);
    Info.remove(obj,callback)
}
//过滤查询
base.find = function (bean,obj,callback) {
    var Info = require('./../model/'+bean);
    Info.find(obj,callback);
}







module.exports = base;