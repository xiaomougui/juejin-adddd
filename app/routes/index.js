var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var randtime = require('../public/javascripts/randtime');
const { time } = require('console');
var home = require("../public/javascripts/home");

let catg = new home();
let timemini = new randtime();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//使用对象传值
let control = new Object();
//控制/home接口次数变量
control.count = 0;
//控制图片的下标
control.imgIndex = 10;
router.post('/data/home', urlencodedParser, function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //分类
  let category = req.body.category;
  //标签
  let tag = req.body.tag;
  //如果给出时间
  let time = req.body.time;
  //判断参数是否正确

  if (category && tag) {
    catg.getCategory(control, res, req);
  } else {
    catg.isErr(res);
  }
  //recommend,newest,hot(time)



});

//文章页接口
router.post('/data/article', urlencodedParser, function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let index = req.body.index;
  let reason = {
    "error": "未能提供所给参数或参数错误"
  }
  if (index == '' || index == undefined || index == null) {
    res.statusCode = 400;
    res.send(reason);
    res.end();
  } else {
    fs.readFile('./public/text/article.json', function (err, data) {
      if (err) {
        throw err;
      } else {
        let data1 = JSON.parse(data);
        fs.readFile('./public/text/home.json', function (err, data) {
          let data2 = JSON.parse(data);
          // let timemini=
          data1[index].information = data2[index];
          data1[index].timemini = timemini.randtime();
          timemini.sayHello();

          res.send(JSON.stringify(data1[index]));
        })
      }
    })
  }

})

//相关文章接口
router.get('/data/correlation', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let index = 0;
  let article = [];
  fs.readFile('./public/text/home.json', function (err, data) {
    let data1 = JSON.parse(data);
    //标记上一个随机数，防止随机数重复
    let index2 = 0;
    for (let i = 0; i < 5; i++) {

      index = Math.floor(Math.random() * 30);
      //避免小概率事件，30的出现
      if (index === 30) {
        index = 29;
      }
      while (index === index2) {
        index = Math.floor(Math.random() * 30);
        //避免小概率事件，30的出现
        if (index === 30) {
          index = 29;
        }
      }
      index2 = index;
      article[i] = data1[index];
    }
    // console.log(article);
    res.send(JSON.stringify(article));
  })
})

router.get('/data/author', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //创建一个随机数对象
  let randsum = new randtime();
  let author = {};
  author.name = "掘金";
  author.like = randsum.rand1(10, 50);
  author.browse = randsum.rand1(6000, 100000);
  author.icon = "http://127.0.0.1:3000/images/jue.png";
  author.signature = "欢迎来到掘金官网！";
  res.send(JSON.stringify(author));
})

module.exports = router;
