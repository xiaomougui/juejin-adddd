<template>
  <div class="home">
    <div class="board">
      <div class="left">
        <Top></Top>
        <Passages :passages="passages"></Passages>
      </div>
      <div class="right" @click="backTop()">
        <div class="signin-tip">
          <div class="first-line">
            <div class="icon-text">
              <i class="el-icon-date"></i>
              <span>下午好！</span>
            </div>
            <el-button round>去签到</el-button>
          </div>
          <div class="second-line">点亮你在社区的每一天</div>
        </div>
        <div class="sidebar-block banner-block" >
          <div class="banner banner">
            <a href="https://juejin.cn/pin/7131931795720765477" target="_blank">
              <img
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c6575f7b7124236b0b0deffc2f6c663~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                width="240"
                height="200"
                class="banner-image"
              />
            </a>
          </div>
        </div>
        <div class="sidebar-block banner-block">
          <div class="banner banner">
            <a
              href="https://juejin.cn/post/7130964538433732644"
              target="_blank"
            >
              <img
                src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a44a1763fd4b4f63ac82735d6ce28142~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                width="240"
                height="200"
                class="banner-image"
              />
            </a>
          </div>
        </div>
        <div
          class="sidebar-block app-download-sidebar-block sidebar-block shadow"
        >
          <div class="block-body">
            <a href="/app" class="" target="_blank">
              <div class="app-link">
                <img
                  src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
                  class="qr-img"
                />
                <div class="content-box">
                  <div class="headline">下载稀土掘金APP</div>
                  <div class="desc">一个帮助开发者成长的社区</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="message">
          <i class="el-icon-edit">啊对对对对队</i>
        </div>
      </div>
    </div>
    <button @click="test">click me</button>
  </div>
</template>

<script>
import Passages from "./childrenComps/Passages.vue";
import Top from "./childrenComps/Top.vue";

import { getHomeData } from "../../network/home";

export default {
  data() {
    return {
      passages: [],
      obj: [1, 2, 3],
    };
  },

  components: {
    Passages,
    Top,
  },

  methods: {
    getHomeData() {
      getHomeData().then((res) => {
        this.passages = res;
      });
    },

    test() {
      this.getHomeData();
      console.log(this.passages);
      console.log(this.passages[0]);
      console.log(this.passages[0].isimage);
    },

    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;

      //为了计算距离顶部的高度，当高度大于500隐藏
      if (that.scrollTop > 700) {
        // document.querySelector('.signin-tip').btnFlag = true
      }else {
        // document.querySelector('.signin-tip').style.visibility = 'visible'
      }
    },
  },

  created() {
    this.getHomeData();
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", function () {
      // 滚动视口高度(也就是当前元素的真实高度)
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //console.log(scrollHeight)

      // 可见区域高度
      let clientHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      // 滚动条顶部到浏览器顶部高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //console.log(clientHeight)
      //console.log(scrollTop)
      //console.log("和："+clientHeight + scrollTop)
      if (clientHeight + scrollTop + 1 >= scrollHeight) {
        getHomeData().then((res) => {
          console.log(res);
          res.forEach((item) => {
            //console.log(item)
            that.passages.push(item);
            console.log(that.passages);
          });
        });
      }
    });
    window.addEventListener("scroll", this.scrollToTop, true);
  },


  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}

.board {
  width: 100%;
  background-color: rgb(244, 245, 245);
  padding-top: 10px;
}

.left {
  width: 45%;
  margin-left: 20%;
  background-color: #fff;
}

.top {
  width: 100%;
}

.right {
  /* position: fixed; */
  position: absolute;
  width: 16%;
  top: 20%;
  left: 66.5%;
  background-color: #fff;
}

.signin-tip {
  width: 240px;
  height: 96px;
}

.first-line {
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
  margin-top: 8px;
}

.second-line {
  margin-bottom: 2px;
  margin-left: 36px;
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
}

.icon-text {
  display: flex;
  align-items: center;
}

div.first-line > button {
  border-color: #1e80ff;
  color: #1e80ff;
}

.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}

.sidebar-block.banner-block {
  overflow: hidden;
  /* position: fixed;
  left: 65%; */
}

.sidebar-block.banner-block .banner {
  height: 200px;
}

.sidebar-block {
  margin-bottom: 1.5rem;
  border-radius: 2px;
}

.qr-img {
  margin-right: 16px;
  width: 4.167rem;
  height: 4.167rem;
}

.headline {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #1d2129;
}

.desc {
  margin-top: 0.5rem;
  font-size: 12px;
  line-height: 20px;
  color: #86909c;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

.app-link {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.message {
  display: flex;
  justify-content: center;
  color: #1e80ff;
}
</style>