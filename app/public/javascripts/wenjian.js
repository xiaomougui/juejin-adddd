function wenjian() {
    this.mineReadFile = function (path) {
        return new Promise((resolve, reject) => {
            //读取文件
            require('fs').readFile(path, (err, data) => {
                //判断
                if (err)
                    reject(err);
                resolve(data);
            })
        })
    }
}

module.exports = wenjian;