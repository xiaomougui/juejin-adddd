<template>
  <div class="main">
    <!-- <div class="header"></div> -->

    <div :class="screenWidth >= 1150 ? 'bg' : 'bg1'">
      <div class="content">
        <div class="view">
            <LeftSideButton v-if="screenWidth >= 1150" class="left-button"></LeftSideButton>
            <!-- <BottomButton v-else></BottomButton> -->
            <RightSideButton v-if="screenWidth >= 1150"></RightSideButton>
          <!-- 主体内容 -->
          <div class="left">
            <div class="titleInfo">
              <TitleInfo :titleInfo = "titleInfo" :authorInfo = "authorInfo"></TitleInfo>
            </div>
            <v-md-preview
              :text="text"
              ref="preview"
              id="article"
              :class="screenWidth >= 1150 ? 'article' : 'article1'"
            ></v-md-preview>
          </div>
          <!-- 目录 -->
          <div class="right" v-if="screenWidth >= 1150">
            <!-- <div class="author-info">作者信息</div> -->
            <div class="author-info">
              <AuthorInfo :authorInfo = "authorInfo"></AuthorInfo>
            </div>
            <div class="download">
              <DownloadInfo></DownloadInfo>
            </div>
            <div class="circleInfo">
              <CircleInfo></CircleInfo>
            </div>
            
            <div class="article-rela">
              <RelativeInfo :relativeInfo = "relativeInfo"></RelativeInfo>
            </div>
            <div class="box_categories">
              <div class="nav_catalogue">
                <span>目录</span>
              </div>
              <div class="categories" ref="categories">
                <!-- :moveIndex="index" -->
                <div
                  ref="catalogue"
                  v-for="(anchor, index) in titles"
                  :key="index"
                  :class="moveIndex === index ? 'activeLight' : ''"
                  :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
                  @click="handleAnchorClick(anchor)"
                >
                  <a style="cursor: pointer">{{ anchor.title }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSideButton from "./Buttons/LeftSideButton.vue";
import RightSideButton from "./Buttons/RightSideButton.vue";
import AuthorInfo from './OtherInfo/AuthorInfo.vue'
import DownloadInfo from './OtherInfo/DownloadInfo.vue'
import CircleInfo from './OtherInfo/CircleInfo.vue'
import RelativeInfo from './OtherInfo/RelativeInfo.vue'
import TitleInfo from "./OtherInfo/TitleInfo.vue";
import { getRightInfo,getRelativeInfo } from "../api/demo";
import { request } from '../network/request'
// import axios from "axios";
// import BottomButton  from "./Buttons/BottomButton.vue";
export default {
  name: "Article",
  components: {
    LeftSideButton,
    RightSideButton,
    AuthorInfo,
    DownloadInfo,
    CircleInfo,
    RelativeInfo,
    TitleInfo
    // BottomButton
    ,
},
  data() {
    return {
      text: "",
      titles: [],
      scroll: "",
      isShow: true,
      screenWidth: document.body.clientWidth,
      moveIndex: 0,
      ContentHeightList: null,
      authorInfo:{},
      relativeInfo:[],
      titleInfo:{},
      index:7
    };
  },
  methods: {
    // 路由接收参数
    // getRouterData() {
    //   // 只是改了query，其他都不变
    //   this.index = this.$route.query.index
    // },
    handleAnchorClick(anchor) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;
      const heading = preview?.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
          behavior: "smooth",
        });
      }
    },
    handleScroll() {
      const scrollY = window.pageYOffset;
      let cate = this.$el.querySelector(".box_categories");
      if (scrollY > 1000) {
        cate.style.position = "fixed";
      } else {
        cate.style.position = "relative";
        cate.style.marginTop = "0px";
      }
    },
    // // 目录滚动高亮
    dataScroll: function () {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },

    loadScroll: function () {
      let self = this;
      var article = document.querySelector("#article");
      // var activeTop = document.querySelector('.activeLight').offsetTop;
      // var cata=document.querySelector('.categories');
      for (var i = article.length - 1; i >= 0; i--) {
        if (self.scroll >= article[i].offsetTop - 100) {
          self.moveIndex = i;
          break;
        }
      }
    },
    getData(index){
      let url = "http://47.92.2.163:80/data/article"
      return request({
      url: url,
      data: `index=${index}`
  })
    },
    getRouterData(){
      this.index = this.$route.query.index
    },

    // 监听滚轮
    CatalogueScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let Heights = this.ContentHeightList;
      var cata = document.querySelector(".categories");
      if (this.ContentHeightList) {
        for (var i = 0; i < Heights.length; i++) {
          if (scrollTop >= Heights[i] && scrollTop <= Heights[i + 1]) {
            this.moveIndex = i;
          }
        }
        cata.scrollTo({
          top: 42 * this.moveIndex - 250,
        });
      }
    },
  },
  watch: {
    scroll: function () {
      this.loadScroll();
      this.CatalogueScroll();
    },
  },
    created() {
    this.getRouterData()
  },
  mounted() {
    // 获取md文件getTiltleData({})
    // this.getData(this.$route.params.index).then((res) => {
    this.getData(this.index).then((res) => {
      // console.log(this.$route.params.index);
      this.text = res.essay;
      this.titleInfo = res
      this.$nextTick(() => {
        const anchors =
          this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
        const titles = Array.from(anchors).filter(
          (title) => !!title.innerText.trim()
        );
        if (!titles.length) {
          this.titles = [];
          return;
        }

        const hTags = Array.from(
          new Set(titles.map((title) => title.tagName))
        ).sort();
        this.titles = titles.map((el) => ({
          title: el.innerText,
          lineIndex: el.getAttribute("data-v-md-line"),
          indent: hTags.indexOf(el.tagName),
        }));
        // 获得页面每一栏高度数组
        let arr = [];
        // let arr1=[];
        for (let i = 0; i < titles.length; i++) {
          arr.push(titles[i].offsetTop - 80);
        }
        // 使最后一行也能被监听到
        arr.push(Number.Max_VALUE);
        this.ContentHeightList = arr;
      });
    });
    // 获取右侧作者信息 
    getRightInfo({}).then((res)=>{
      this.authorInfo = res.data
    })
    // 获取相关文章信息
    getRelativeInfo({}).then((res)=>{
      // console.log(res);
      this.relativeInfo = res.data
    })
    // 获取标题相关信息
    // getTitleData().then((res)=>{
    //   // console.log(res);
    //   // this.titleInfo = res
    // })
    
    // 响应式布局
    //获取屏幕尺寸
    window.onresize = () => {
      //屏幕尺寸变化
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
      })();
    };
    // 自定义锚点
    // 目录滚动
    window.addEventListener("scroll", this.dataScroll);
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    this.ContentHeightList = null;
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
html {
  color:#f4f5f5;
}
.main {
  margin: 0;
  padding: 0;
  background: #f4f5f5;
}
.bg {
  /* padding-left: 400px;
  padding-right: 400px; */
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
  /* background: skyblue; */
  z-index: 250;
}
.content {
  position: relative;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
}
.view {
  margin-top: 17.67px;
  padding: 0 0 80px;
}
.right {
  position: absolute;
  font-size: 14px;
  top: 0;
  right: 0;
  width: 300px;
  background: #f4f5f5;
}
.author-info {
  position: relative;
  width: 300px;
  height: 150px;
  background: #fff;
  margin-bottom: 20px;
}
.download {
  position: relative;
  /* width: 100%; */
  width: 300px;
  height: 90px;
  background: #fff;
  margin-bottom: 20px;
}
.circleInfo {
  position: relative;
  /* width: 100%; */
  width: 300px;
  height: 248px;
  background: #fff;
  margin-bottom: 20px;
}
.article-rela {
  position: relative;
  /* width: 100%; */
  width: 300px;
  height: 370px;
  background: #fff;
  margin-bottom: 20px;
}
a {
  color: inherit;
  display: inline-block;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.titleInfo {
  position: relative;
  /* padding: 27px; */
  /* margin-right: 16.875rem; */
  display: block;
  width: 820px;
  z-index: 1;
  border-radius: 4px;
  background-color: #fff;
}
.article {
  position: relative;
  /* padding: 27px; */
  /* margin-right: 16.875rem; */
  width: 75%;
  width: 820px;
  height: 90px;
  max-width: 100%;
  z-index: 1;
  border-radius: 4px;
  /* margin-top: 100px; */
  margin-bottom: 15px;
  background-color: #fff;
  box-sizing: border-box;
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
.box_categories {
  background: #fff;
  height: 550px;
  width: 300px;
  border-radius: 10px;
}
.categories {
  position: relative;
  height: 500px;
  width: 300px;
  overflow-y: scroll;
  background: #fff;
}
.nav_catalogue {
  width: 300px;
  height: 50px;
  line-height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(228, 230, 235);
}
.nav_catalogue span {
  font-size: 16px;
  margin-left: 15px;
}
.categories a {
  margin-left: 15px;
}
.left-button {
  margin-left: -90px;
}
/* .content .categories .activeLight {
  border-left: 2px solid rgb(30,128,255);
  
} */
.content .categories .activeLight:before {
  content: "";
  position: absolute;
  /* top: 0; */
  left: 0;
  width: 4px;
  height: 16px;
  border-radius: 0 2px 2px 0;
  background-color: rgb(30, 128, 255);
  z-index: 9999999999999;
}
.content .categories .activeLight a {
  color: rgb(30, 128, 255);
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(228, 230, 235);
  width: 6px;
  border-radius: 3px;
}
h1 {
  font-size: 10px;
}
</style>