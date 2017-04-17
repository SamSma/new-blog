
var express = require('express');
var app = express();
var router = express.Router();

var base = require("../../controller/baseDao");
var article = require('../../model/article');


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
  base.find('title',{},function (err,docs) {
      if(err){
          console.log(err);
          return ;
      }
      res.json({
          status :2,
          data : docs
      })
  })

    //title.find({}).limit;
})
//分类删除
router.post('/detaleLei',function (req,res) {
    var id = req.body.id;
    base.remove('title',{
        _id : id
    },function (err,doc) {

      if(err){
          console.log(err);
          return ;
      }
      res.json({
          status: 2,
          msg : '删除成功'
      })
    })

});
//文章添加
router.post('/articleAdd',function (req,res) {

    var a = new article({
        title : req.body.title,
        intro : req.body.intro ,
        content : req.body.content ,
        leiList : req.body.lei
    })
    a.save(function () {
        res.json({
            status : 2,
            msg :'添加成功'
        })
    });


});
//文章列表
router.post('/titleList',function (req,res) {
    var limit = req.body.limit;//
    var offset = req.body.offset;//过滤多少条
    var order =  req.body.order;//排序
    var lei = req.body.secrch ;
    var count = 0;
    article.count(function (err,doc) {
        if(err){
            console.log(err)
        }
        count = doc;
    })
    var obj = lei=="xuan" ? {} :{ leiList : lei };
   article.find(obj).sort({ _id : order} ).limit(limit).skip(offset).populate('leiList').exec(function (err,docs) {
        if(err){
            console.log(err);
            return ;
        }
        res.json({
            all : count,
            data : docs
        })
    })
})


module.exports = router;
