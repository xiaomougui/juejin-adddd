# API文档

### /data/home接口（GET请求）

传回参数为以下JSON格式的对象数组：

```javascript
let home = {
    index: 0,
    author: "掘金",
    title: "",
    category: "",
    goodtext: "",
    time: "",
    browse: 0,
    like: 0,
    comments: 0,
    collect: 0
}
```

* index，该对象在服务器JSON文件数据数组中的下标
* author，默认为掘金
* title，文章的标题
* category，文章的分类**这个暂时还没有写**
* goodtext，精选内容，如下
  * ![image-20220812152509224](https://xiaomogui666.oss-cn-beijing.aliyuncs.com/img/image-20220812152509224.png)
* time，发布时间，随机数
* browse，浏览数
* like，点赞数
* comments，评论数，默认为0
* collect，收藏数，默认为0