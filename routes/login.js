/**
 * Created by Administrator on 2017/4/14 0014.
 */
var express = require('express');
var app = express();
var router = express.Router();

var base = require('../controller/baseDao');

app.use(function(req,res){
    res.json({
        status  : 1 ,//成功
        msg : '' //信息
    })
})
//登录页面
router.get('/',function (req,res) {

    res.render('login',{
        status : 1,
        msg : ''
    })
});
router.post('/',function (req,res) {
  var user = req.body.user;
  var pass = req.body.password;
  if(user == "" || pass == ""){
      res.render('login',{
          status :2,
          msg : '账号或密码不能为空'
      })
      return ;
  }


    base.findOne('User',{ name : user , password : pass },function (err,data) {
        if(err){
            console.log(err);
            return ;
        }

        if(!data){
            res.render('login',{
                status :3,
                msg : '账号或密码不正确'
            })
            return ;
        }
        res.cookie('name' , user );
        res.redirect('/back');
    })
})

//注册页面


router.get('/reg',function (req,res) {
    res.render('reg',{
        title:'注册页面',
        msg : ''
    })
});
router.post('/reg',function (req,res) {
    //console.log(req.body)
    var user = req.body.user;
    var pass1 = req.body.password1;
    var pass2 = req.body.password2;
    if(user =='' || pass1 =='' || pass2 == ''){
        res.render('reg',{
            status:2,
            msg :'账户或密码不能为空'
        })
        return ;
    };
    if(pass1 != pass2){
        res.render('reg',{
            status:3,
            msg :'密码不一致'
        })
        return ;
    };
    base.findOne('User',{name:user},function (err,data) {

        if(err){
            console.log(err);
            return ;
        }
        if(data){
            res.render('reg',{
                status:4,
                msg :'用户已经存在'
            })
            return ;
        }
        base.save('User',{
            name  :  user ,
            password :pass1
        });
        res.redirect('/login');
    })


})



module.exports  = router;