/**
 * Created by Administrator on 2017/4/14 0014.
 */
var express = require('express');
var app = express();
var router = express.Router();
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
  if(user != 'admin' || pass != 'admin'){

      res.render('login',{
          status :3,
          msg : '账号或密码不正确'
      })
      return ;
  }
  res.redirect('/back');
})





module.exports  = router;