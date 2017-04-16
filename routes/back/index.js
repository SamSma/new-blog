
var express = require('express');
var app = express();
var router = express.Router();

var base = require("../../controller/baseDao");



router.get('/',function (req,res) {
    //  console.log(req.cookies)
    var name = req.cookies.name;
    res.render('back/index',{ title : '后台管理页面',name : name });
})
//分类列表
router.get('/leiList',function (req,res) {

    res.render('back/lei-list');
})
//分类添加
router.get('/leiAdd',function (req,res) {

    res.render('back/lei-add');
});
//文章列表
router.get('/titleList',function (req,res) {

    res.render('back/title-list');
})
//文章添加
router.get('/titleAdd',function (req,res) {
    res.render('back/title-add');
})
//分类添加
router.post('/leiAdd',function (req,res) {

    var tit = req.body.title;
    if(tit==''){
        res.json({
            status : 1 ,
            msg :'不能为空'
        })
        return ;
    }
    base.findOne('title',{title:tit},function (err,doc) {
        if(err){
            console.log(err);
            return ;
        }
        if(doc){
            res.json({
                status :2 ,
                msg :'标题已经存在'
            });
            return ;
        }
        base.save('title',{
            title:tit
        })
        res.json({
            status :3 ,
            msg :'注册成功'
        })
    })



});
//分类列表
router.post('/leiList',function (req,res) {

    var limit = req.body.limit;//显示
    var order = Number(req.body.offset);//当前页
    var sort = req.body.order;//排序
    var title = require("../../model/title");
    title.find({}).limit(limit).sort({_id: sort }).skip(Number(limit*order)).exec(function (err,docs) {
        if(err){
            console.log(err);
            return ;
        }
        var count = docs.length;
       res.json({
           status : '2',
           data : docs,
           count :count
       })
    })

    //title.find({}).limit;
})
module.exports = router;
