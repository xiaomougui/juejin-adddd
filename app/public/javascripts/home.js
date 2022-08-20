let time = require("./randtime");
let wenjian = require("./wenjian");
let fs = require("fs");

// 创建对象
let rand = new time();
let file = new wenjian();

function home() {
    let reason = {
        "error": "未能提供所给参数或参数错误"
    }
    let category1 = '';
    //err
    this.isErr = function (res) {
        res.statusCode = 400;
        res.send(reason);
        res.end();
    }
    //综合与关注,随机出类型
    this.randCategory = function () {
        return file.mineReadFile('./public/text/category.json').then(value => {
            return new Promise((resolve, reject) => {
                let data1 = JSON.parse(value);
                //第一层下标
                let cat1 = rand.rand1(0, 7);
                console.log(cat1);
                //第二层下标
                let cat2 = 0;
                switch (cat1) {
                    case 0:
                        cat2 = rand.rand1(0, data1.back.length - 1);
                        resolve(data1.back[cat2]);
                        break;
                    case 1:
                        cat2 = rand.rand1(0, data1.front.length - 1);
                        category = data1.front[cat2];
                        resolve(data1.front[cat2]);
                        break;
                    case 2:
                        cat2 = rand.rand1(0, data1.Android.length - 1);
                        category = data1.Android[cat2];
                        resolve(data1.Android[cat2]);
                        break;
                    case 3:
                        cat2 = rand.rand1(0, data1.iOS.length - 1);
                        category = data1.iOS[cat2];
                        resolve(data1.iOS[cat2]);
                        break;
                    case 4:
                        cat2 = rand.rand1(0, data1.AI.length - 1);
                        category = data1.AI[cat2];
                        resolve(data1.AI[cat2]);
                        break;
                    case 5:
                        cat2 = rand.rand1(0, data1.work.length - 1);
                        category = data1.work[cat2];
                        resolve(data1.work[cat2]);
                        break;
                    case 6:
                        cat2 = rand.rand1(0, data1.read.length - 1);
                        category = data1.read[cat2];
                        resolve(data1.read[cat2]);
                        break;
                }
            })
        }, reason => {
            throw reason;
        })
    }

    //做出时间限制而给出的随机时间
    this.randtime = function (time) {
        let time1 = rand.rand1(1, time * 24);
        let time2;
        //判断时间给出具体时间数据
        if (time1 >= 0 && time1 < 24) {
            if (time1 === 0) {
                time2 = 1 + "小时前";
            } else {
                time2 = time1 + "小时前";
            }
        } else if (time1 > 24 && time1 < 720) {
            time2 = Math.floor(time1 / 24) + "天前";
        }
        return time2;
    }
    this.getCategory = function (control, res, req) {
        //标记是否执行随机分类
        let sign1 = false;
        //标记是否进行时间限制
        let sign2 = false;
        //定义局部变量随机函数
        let that = this;
        //记录进行时间限制的具体时间
        let time;
        //是否错误
        let err1 = false;
        //判断是否进行随机分类
        if (req.body.category == "综合" || req.body.category == "关注") {
            sign1 = true;
        }
        //判断是否进行时间限制
        if (req.body.tag === "newest") {
            sign2 = true;
            time = 10;
        } else if (req.body.tag === "hot") {
            sign2 = true;
            time = req.body.time;
            //如果time为空，返回400状态码
            if (!time) {
                this.isErr(res);
                err1 = true;
            }
        }
        if (!err1) {
            fs.readFile('./public/text/home.json', function (err, data) {
                control.count += 1;
                if (err) {
                    throw err;
                } else {
                    let data1 = JSON.parse(data);
                    let part = [];
                    let index = 15 * (control.count - 1);
                    let sum = 15 * control.count;
                    //循环出15个数据
                    for (; index < sum; index++) {

                        //标明imgUrl操作
                        if (index < 15) {
                            part[index] = data1[index];

                            //如果要执行随机分类，需要使用一个Promise对象
                            if (sign1 === true) {
                                //记录执行以下函数的当前index
                                let index1 = index;
                                that.randCategory().then(value => {
                                    console.log(index1);
                                    part[index1].category = value;
                                })
                            } else {
                                part[index].category = req.body.category;
                            }

                            //判断时间
                            if (sign2 === true) {
                                if (time != "all") {
                                    let newtime = that.randtime(time);
                                    part[index].time = newtime;
                                }
                            }

                            //标明imgUrl
                            if (part[index].isimage === true) {
                                part[index].imgUrl = "http://127.0.0.1:3000/images/" + control.imgIndex + ".png";
                                control.imgIndex++;
                            }
                        } else {
                            part[index - 15] = data1[index];
                            if (sign1 === true) {
                                //记录执行以下函数的当前index
                                let index1 = index;
                                that.randCategory().then(value => {
                                    part[index1 - 15].category = value;
                                })
                            } else {
                                console.log(sum);
                                console.log(index);
                                console.log(req.body.category);
                                part[index - 15].category = req.body.category;
                            }

                            //判断时间
                            if (sign2 === true) {
                                if (time != "all") {
                                    let newtime = that.randtime(time);
                                    part[index - 15].time = newtime;
                                }
                            }

                            //标明imgUrl
                            if (part[index - 15].isimage === true) {
                                part[index - 15].imgUrl = "http://127.0.0.1:3000/images/" + control.imgIndex + ".png";
                                control.imgIndex++;
                            }
                        }
                        if (control.imgIndex == 25) {
                            control.imgIndex = 10;
                        }
                    }
                    //防止第三次读取
                    if (control.count === 2) {
                        control.count = 0;
                    }
                    setTimeout(() => {
                        res.send(JSON.stringify(part));
                    }, 100);
                }
            })
        }

    }
}

module.exports = home;