<template>
  <div class="main">
    <!-- <div class="header"></div> -->
    <Header class="header" />
    <div class="bg">
      <div class="content">
        <!-- 目录 -->
        <div class="right">
          <div class="author-info">作者信息</div>
          <div class="download">下载稀土掘金APP</div>
          <div class="article-rela">相关文章</div>
          <div class="categories">
            <div
              v-for="(anchor, index) in titles"
              :key="index"
              :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
              @click="handleAnchorClick(anchor)"
            >
              <a style="cursor: pointer">{{ anchor.title }}</a>
            </div>
          </div>
        </div>
        <!-- 主体内容 -->
        <v-md-preview :text="text" ref="preview" class="article"></v-md-preview>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header"
import { demoMD } from "../api/demo";
export default {
  components: {
    Header,
  },
  data() {
    return {
      text: "",
      titles: [],
    };
  },
  methods: {
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
        });
      }
    },
    handleScroll() {
      const scrollY = window.pageYOffset;
      let cate = this.$el.querySelector(".categories");
      // console.log(cate);
      if (scrollY > 1000) {
        cate.style.position = "fixed";
        cate.style.marginTop = "-600px";
      } else {
        cate.style.position = "relative";
        cate.style.marginTop = "0px";
      }
    },
  },
  beforeMount() {
    // demoMD({}).then((res)=>{
    // // console.log(res);
    // this.text = res.data
    // })
  },
  mounted() {
    // 获取md文件
    demoMD({}).then((res) => {
      // console.log(res);
      this.text = res.data;
      // console.log(this.text);
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
      });
    });
    // 自定义锚点
    // 目录滚动
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
.main {
  margin: 0;
  padding: 0;
  background: #f4f5f5;
}
.bg {
  padding-left: 100px;
  padding-right: 100px;
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
  /* max-width: 1140px; */
  width: 100%;
  margin: 0;
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
  width: 100%;
  height: 150px;
  background: #fff;
  margin-bottom: 20px;
}
.download {
  position: relative;
  width: 100%;
  height: 100px;
  background: #fff;
  margin-bottom: 20px;
}
.article-rela {
  position: relative;
  width: 100%;
  height: 300px;
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
.article {
  position: relative;
  /* padding: 27px; */
  margin-right: 270px;
  z-index: 1;
  border-radius: 4px;

  background-color: #fff;
}
.categories {
  position: relative;
  height: 600px;
  overflow-y: scroll;
  background: #fff;
}

</style>