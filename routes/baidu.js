var express = require('express');
var router = express.Router();
var userDao= require('../dao/userDao');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('baidu');
});
router.get('/baidunews', function(req, res, next) {
  res.render('newsbaidu');
});



router.get('/queryAll', function(req, res, next) {
    console.log('查询所有news');
    userDao.queryAll(req, res, next);
});

router.get('/baidunews/10', function(req, res, next)  {
    console.log('查询所有news');
    userDao.queryAll(req, res,next);

});
//
//router.post('/baidunews', function(req, res, next) {
//    newsdao.queryAll(res,req,next);
//
//});
module.exports = router;
