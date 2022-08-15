<template>
  <div class="main">
  <div class="header"></div>
  <LeftSideButton v-if="screenWidth >= 1000"></LeftSideButton>
  <!-- <BottomButton v-else></BottomButton> -->
  <RightSideButton v-if="screenWidth >= 1000"></RightSideButton>
  <div :class="screenWidth>=1000 ? 'bg' : 'bg1'">
    <div class="content">
      <!-- 目录 -->
      <div class="right" v-if="screenWidth>=1000">
        <div class="author-info">作者信息</div>
        <div class="download">下载稀土掘金APP</div>
        <div class="article-rela">相关文章</div>
      <div class="categories">
        <div
          ref="catalogue"
          v-for="(anchor,index) in titles"
          :key="index"
          :class="moveIndex === index ? 'activeLight' : ''"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
          @click="handleAnchorClick(anchor)"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </div>
      </div>
      <!-- 主体内容 -->
      <v-md-preview :text="text" ref="preview" :class="screenWidth>=1000 ? 'article' : 'article1'" @scroll="CatalogueScroll()"></v-md-preview>
  </div>
  </div>
</div>
</template>

<script>
import LeftSideButton from "./Buttons/LeftSideButton.vue";
import RightSideButton from "./Buttons/RightSideButton.vue";
import {demoMD} from '../api/demo'
// import BottomButton  from "./Buttons/BottomButton.vue";
export default {
  name: 'Article',
  components: {
    LeftSideButton,
    RightSideButton,
    // BottomButton 
  },
  data() {
    return {
      text:'',
      titles:[],
      isShow: true,
      screenWidth: document.body.clientWidth,
      moveIndex: 0,
      ContentHeightList: null,
    };
  },
  methods: {
    handleAnchorClick(anchor) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview?.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
          behavior:"smooth"
        });
      }
    },
    handleScroll(){
      const scrollY = window.pageYOffset
      let cate = this.$el.querySelector('.categories')
      // console.log(cate);
      if(scrollY > 610) {
        cate.style.position = 'fixed'
        cate.style.marginTop = '-600px'
      }else {
        cate.style.position = 'relative'
        cate.style.marginTop = '0px'
      }
    },
    // 目录滚动高亮
    // 获取页面每一栏内容的高度数组
    getChildrenHeigh(){
      let pageScroll = document.querySelector('.categories');
      // let pageScroll = this.$refs.preview.$el;
      let arr=[];
      console.log(this.titles.length);
      for(let i=0;i<this.titles.length;i++){
        arr.push(pageScroll.children[i].offsetTop);
      }
      // 使最后一行也能被监听到
      arr.push(Number.Max_VALUE);
      this.ContentHeightList = arr;
      console.log(this.ContentHeightList);
    },
    // 监听滚轮
    CatalogueScroll(){
      var scrollTop=
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
      let Heights = this.ContentHeightList;
      if(this.ContentHeightList){
        for(let i=0;i<Heights.length;i++){
          if(scrollTop >= Heights[i] && scrollTop <= Heights[i+1]){
            console.log(i);
            this.moveIndex = i;
          }
        }
      }
    },
  },
  beforeMount(){
    // demoMD({}).then((res)=>{
    // // console.log(res);
    // this.text = res.data
    // })
  },
  mounted(){
    // 获取md文件
    demoMD({}).then((res)=>{
      // console.log(res);
      this.text = res.data
      // console.log(this.text);  
      this.$nextTick(()=>{
        const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
        const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

        if (!titles.length) {
          this.titles = [];
          return;
        }

        const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();
        this.titles = titles.map((el) => ({
          title: el.innerText,
          lineIndex: el.getAttribute('data-v-md-line'),
          indent: hTags.indexOf(el.tagName),
        }));
      })
    })
    // 响应式布局
    //获取屏幕尺寸
    window.onresize = () => {
      //屏幕尺寸变化
      return (() => {
        window.screenWidth = document.body.clientWidth
        this.screenWidth = window.screenWidth
      })();
    }
    // 自定义锚点
  // 目录滚动
  this.getChildrenHeigh(),
  window.addEventListener('scroll',this.handleScroll,true),
  window.addEventListener('scroll',this.CatalogueScroll,true)
  },
  destroyed() {
    this.ContentHeightList = null;
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.CatalogueScroll);
},
}
</script>
<style scoped>
.main {
  margin: 0;
  padding: 0;
  background: #f4f5f5;
}
.bg {
  padding-left: 85px;
  padding-right: 85px;
}

.bg1 {
  padding: 0;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: 100%;
  background: skyblue;
  z-index: 250;
}
.content {
  position: relative;
  /* max-width: 1140px; */
  width: 100%;
  margin:0;
  padding: 0;
}
.right {
  font-size: 14px;
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  background: #f4f5f5;
}
.author-info {
  position: relative;
  /* width: 100%; */
  width: 300px;
  height: 150px;
  background: #fff;
  margin-bottom: 20px;
}
.download {
  position: relative;
  /* width: 100%; */
  width: 300px;
  height: 100px;
  background: #fff;
  margin-bottom: 20px;
}
.article-rela {
      position: relative;
  /* width: 100%; */
  width: 300px;
  height: 300px;
  background: #fff;
  margin-bottom: 20px;
}
a{
    color: inherit;
    display: inline-block;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.article {
  position: relative;
  /* padding: 27px; */
  /* margin-right: 16.875rem; */
  width: 75%;
  z-index: 1;
  border-radius: 4px;

  background-color: #fff;
}
.article1 {
  position: relative;
  /* padding: 27px; */
  /* margin-right: 16.875rem; */
  width: 100%;
  z-index: 1;
  border-radius: 4px;

  background-color: #fff;
}
.categories {
  position: relative;
  height: 600px;
  width: 300px;
  overflow-y: scroll;
  background: #fff;
}
.categories a {
  margin-left: 10px;
}
.content .categories .activeLight {
  border-left: 2px solid rgb(72, 109, 233);
}
.content .categories .activeLight a {
  color:rgb(72, 109, 233);
}

</style>