<template>
<div>
  <div class="author">
    <div class="author_all">
      <span class="author__img">
        <!-- <img src="http://127.0.0.1:3000/images/jue.png"> -->
        <!-- <img src="https://p6-passport.byteacctimg.com/img/user-avatar/9929dd3ae439d1f2412a92ed0387caef~300x300.image"> -->
        <img :src="authorInfo.icon">
      </span>
      <span class="author__name">
        {{authorInfo.name}}
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png">  
      </span>
    </div>
    <div>
      <div class="like">
        <span class="iconfont">&#xe600;</span>
        获得点赞 {{authorInfo.like}}
      </div>
      <div class="browse">
        <span class="iconfont">&#xe666;</span>
        文章被阅读 {{authorInfo.browse}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:'AuthorInfo',
  props: {
    authorInfo: {
      type: Object,
      default() {
          return {};
      },
    },
  },
}
</script>

<style scoped>
@import "../../style/iconfont.css";
.author {
  padding: 16.67px;
}
.author_all {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e6eb;
  padding-bottom: 14.16px;
}
.author__name {
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
}
.author__name img {
  position: relative;
  width: 35px;
  height: 16px;
  top:3px;
}
.author__img img {
  overflow: hidden;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
}
.like {
  margin-top: 14.16px;
  display: flex;
  align-items: center;
}
.iconfont {
  margin-right: 15px;
  width: 20px;
}
.browse {
  margin-top: 6.67px;
  display: flex;
  align-items: center;
}
</style>