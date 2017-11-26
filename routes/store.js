/**
 * Created by Administrator on 2017/6/30 0030.
 */
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {

    res.json({
        status: 1,//成功
        data:[{name:"店铺1"},{name:"店铺2"},{name:"店铺3"},{name:"店铺4"}]
    })
});
router.post('/stream',function ( req ,res , next) {
    res.json({
        status: 1,//成功
        data:[{
            title:'我的账号',
            date:'2017-02-01',
            money:'10'
        },{
            title:'我的账号我的账号我的账号我的账号我的账号',
            date:'2017-02-01',
            money:'40'
        },{
            title:'我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号我的账号',
            date:'2017-05-01',
            money:'20'
        }]
    })
})
module.exports = router;