# API文档

### /data/home接口（POST请求）

发送参数：
	category(分类)，例如category=前端（必须）

​	tag：recommend（推荐）、newest（最新）、hot（热门）（必须）

​	time：当tag=hot时（必须），3（3天内），7，30，all（全部）

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
* category，文章的分类**（根据传回参数发送）**
* goodtext，精选内容，如下
  * ![image-20220812152509224](https://xiaomogui666.oss-cn-beijing.aliyuncs.com/img/image-20220812152509224.png)
* time，发布时间，随机数
* browse，浏览数
* like，点赞数
* comments，评论数，默认为0
* collect，收藏数，默认为0
* imgUrl，文章相关图片的链接**（更新）**

### /data/article（POST请求）

发送参数

​	index（数字），文章的下标，在首页点击的时候传递，调试时可以选0-29进行请求

传回参数

```javascript
let article={
	information,
	index,
	title,
	timemini,
	essay
}
```

* information，包括上面首页的所有信息
* index，下标
* title，文章标题
* timemini，文章发布时间，**已完成，返回一个timemini对象，包含时间（更新）**，可以使用date对象初始化
  * ![image-20220813104441291](https://xiaomogui666.oss-cn-beijing.aliyuncs.com/img/image-20220813104441291.png)
* essay，文章内容，md内容

### /data/correlation（GET请求）

返回值：

​	5篇相关文章的信息，信息与首页接口相同

![image-20220815173440217](https://xiaomogui666.oss-cn-beijing.aliyuncs.com/img/image-20220815173440217.png)

### /data/author（GET请求）

返回值（JSON对象），包含：

* name：作者名，默认掘金
* icon：头像
* signature：签名
  * ![image-20220816211546156](https://xiaomogui666.oss-cn-beijing.aliyuncs.com/img/image-20220816211546156.png)

* like：点赞数
* browse：浏览数

### 请求image

首页

![屏幕截图 2022-08-15 172459](https://xiaomogui666.oss-cn-beijing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-08-15%20172459.png)

文章页

![屏幕截图 2022-08-15 173027](https://xiaomogui666.oss-cn-beijing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-08-15%20173027.png)

比如我要请求二维码图片：http:127.0.0.1:3000/images/QR.png