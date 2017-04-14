
var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function (req,res) {
    res.render('back/index',{ title : '后台管理页面' });
})



module.exports = router;
