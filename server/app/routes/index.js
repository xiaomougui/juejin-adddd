var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//控制/home接口次数变量
let count = 0;
router.get('/data/home', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  count++;
  fs.readFile('./public/text/home.json', function (err, data) {
    if (err) {
      throw err;
    } else {
      let data1 = JSON.parse(data);
      let part = [];
      let index = 15 * (count - 1);
      let sum = 15 * count;
      //循环出15个数据
      for (; index < sum; index++) {
        if (index < 15) {
          part[index] = data1[index];
        } else {
          part[index - 15] = data1[index];
        }
      }
      res.send(JSON.stringify(part));
      //防止出现第三次数据读取
      if (count === 2) {
        count = 0;
      }
    }
  })
});

router.post('/data/article', urlencodedParser, function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  fs.readFile('./public/text/article.json', function (err, data) {
    if (err) {
      throw err;
    } else {
      let data1 = JSON.parse(data);
      let index = req.body.index;
      res.send(JSON.stringify(data1[index]));
    }
  })
})


module.exports = router;
