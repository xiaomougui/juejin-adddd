function randtime() {
    let time = {
        years: 2022,
        mouths: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    this.rand1 = function (zuo, you) {
        let rand = Math.floor(Math.random() * (you - zuo) + zuo);
        if (rand === you) {
            rand = you - 1;
        }
        return rand;
    }

    this.sayHello = function () {
        console.log("hello");
    }

    this.randtime = function () {
        //月份
        time.mouths = this.rand1(7, 9);
        //天数
        time.days = this.rand1(0, 15);
        //时
        time.hours = this.rand1(0, 24);
        //分
        time.minutes = this.rand1(0, 60);
        //秒
        time.seconds = this.rand1(0, 60);
        return time;
    }
};

module.exports = randtime;