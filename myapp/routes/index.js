var express = require('express');
var router = express.Router();
var cors = require('cors');
const request = require('request')
/* GET home page. */
router.get('/getfood',cors(), function(req, res) {
  res.send({
    msg:[{
      title:'拉面',
      price:{
        zhengchang:10,
        dazhe:5
      }
    },{
      title:'馒头',
      price:{
        zhengchang:10,
        dazhe:5
      }
    },{
      title:'米饭',
      price:{
        zhengchang:10,
        dazhe:5
      }
    },{
      title:'稀饭',
      price:{
        zhengchang:10,
        dazhe:5
      }
    },]
  });
});

router.get('/getgood',cors(),function(req,res){
  res.send({
    data:[{
      name:'花椒锅巴',
      imgurl:'./1.jpg',
      price:19.9,
      number:0
    },{
      name:'芒果干',
      imgurl:'./2.jpg',
      price:23.5,
      number:0
    },{
      name:'猪肉脯',
      imgurl:'./3.jpg',
      price:22,
      number:0
    },{
      name:'巧克力',
      imgurl:'./4.jpg',
      price:99,
      number:0
    }]
  })
})
router.get('/getweather',cors(),function(req,res){
  request.post({
    url:'https://api.jisuapi.com/weather/query',
    form:{
        city:req.query.city,
        appkey:'2d002cc53a587931'
    }
  }, function (err, response, body) {
    res.send(response.body);
  })
})
          //   前台接口
router.get('/getcaipu',cors(),function(req,res){

  request.post({
    //  地址
    url:'https://api.jisuapi.com/recipe/search',
    form:{
      //  参数
      keyword:req.query.keyword,
      num:req.query.num,
      appkey:'2d002cc53a587931'
    }
  }, function (err, response, body) {
    res.send(response.body);
  })
})



//   前台接口
router.get('/getschool',cors(),function(req,res){
  request.post({
    //  地址
    url:'https://api.jisuapi.com/school/get',
    form:{
      //  参数
      province:'广西',
      appkey:'2d002cc53a587931'
    }
  }, function (err, response, body) {
    res.send(response.body);
  })
})

module.exports = router;
