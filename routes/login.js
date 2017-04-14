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
    res.render('login')
})
router.post('/',function (req,res) {
  var user = req.body.user;
  var pass = req.body.password;
  if(user == "" || pass == ""){
      res.json({
          status : 2,
          msg : '账号或密码不能为空'
      })
      return ;
  }
  if(user != 'admin' || pass != 'admin'){
      res.json({
          status : 3,
          msg : '账号或密码不正确'
      })
      return ;
  }
  res.redirect('/back');
})





module.exports  = router;