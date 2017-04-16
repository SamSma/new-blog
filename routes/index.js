var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我的博客' });
});
//阅读页面
router.get('/read',function (req,res) {
  res.render('read')
})

module.exports = router;
