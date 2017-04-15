
var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function (req,res) {
    //  console.log(req.cookies)
    var name = req.cookies.name;
    res.render('back/index',{ title : '后台管理页面',name : name });
})



module.exports = router;
