<template>
  <div class="title">
    <div class="title-info">{{titleInfo.title}}</div>
    <div class="author-info">
      <span class="author__img">
        <img :src="authorInfo.icon">
      </span>
      <div class="author__name">
        <span class="autho__name__text">
         {{authorInfo.name}}
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png">  
        </span>
        <!-- <div class="time">{{getNowDate()}}</div> -->
        <div class="time">{{titleInfo.timemini.years}}年{{titleInfo.timemini.mouths}}月{{titleInfo.timemini.days}}日 {{titleInfo.timemini.hours}}:{{titleInfo.timemini.minutes}}
        · 阅读 {{titleInfo.information.browse}}
        </div>
      </div>
      <button class="btn">
        <span class="text">
          <span class="icon">+</span> 
          <span>关注</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name:'TitleInfo',
  data(){
    return {
      timestiky:''
    }
  },
  props: {
  titleInfo: {
    type: Object,
    default() {
        return {};
    },
  },
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
.title {
  margin-left: 40px;

}
.title-info {
  /* padding: 20px; */
  padding-top: 30px;
  font-size:40px;
  width: 700px;
  font-weight: 700;
}
.title .title-info {
  /* width: 50%; */
}
.author-info {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.author-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor:pointer;
}
.author__name {
  font-size: 14px;
  margin-left: 15px;
  
}
.author__name .autho__name__text {
  cursor:pointer;
}
.author__name img {
  position: relative;
  width: 35px;
  height: 16px;
  top:2px;
  cursor:pointer;
}
.time {
    font-size: 14px;
    color: #8a919f;
    margin-top: 2px;
    line-height: 22px;
    letter-spacing: 1px;
}
.author-info .btn {
  position: absolute;
  right: 30px;
  width: 60px;
  height: 34px;
  font-size: 14px;
  color: #1e80ff;
  background: rgba(30,128,255,.05);
  border: 1px solid rgba(30,128,255,.3);
  border-radius: 4px;
  font-weight: 200;
}
.author-info .btn:hover {
  background: #e8f2ff;
  cursor:pointer;
}
.icon {
  margin-right: 4px;
  width: 12px;
  height: 15px;
  display: inline-block;
  transform: scale(1.5, 1.5);
}

</style>