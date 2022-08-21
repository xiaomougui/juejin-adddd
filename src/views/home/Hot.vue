<template>
  <div class="home">
    <div class="board">
      <div class="content">
        <div class="left">
          <TopHot :index="3 + ''" upper="home" @goto="goto"></TopHot>
          <Passages :passages="passages"></Passages>
        </div>
        <div class="right">
          <Signin></Signin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Passages from "./childrenComps/Passages.vue";
import Signin from "../../components/Signin.vue";
import TopHot from "./childrenComps/TopHot.vue";

import { getHomeDataH } from "../../network/home";
import { request } from "../../network/request";

export default {
  data() {
    return {
      passages: [],
      time: 3,
      // fixed :false,
    };
  },

  components: {
    Passages,
    TopHot,
    Signin,
  },

  methods: {
    getHomeData() {
      getHomeDataH().then((res) => {
        this.passages = res;
      });
    },

    getDataH() {
      request({
        url: "/data/home",
        data: `category=后端&tag=hot&time=7`,
      }).then((res) => {
        this.passages = res;
      });
    },

    goto(command) {
      //console.log(command)
      if (command != this.time) {
        this.time = command;
        console.log(this.time);
        if (command == "3天内") {
          getHomeDataH().then((res) => {
            this.passages = res;
          });
        } else if (command == "7天内") {
          request({
            url: "/data/home",
            data: `category=后端&tag=hot&time=7`,
          }).then((res) => {
            this.passages = res;
          });
        } else if (command == "30天内") {
          request({
            url: "/data/home",
            data: `category=后端&tag=hot&time=30`,
          }).then((res) => {
            this.passages = res;
          });
        } else {
          request({
            url: "/data/home",
            data: `category=后端&tag=hot&time=all`,
          }).then((res) => {
            this.passages = res;
          });
        }
      }
    },

    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;

      var changeDiv = document.querySelector(".slide");

      if (that.scrollTop < 560) {
        // firstDiv.style.display = 'block'
        changeDiv.style.position = "relative";
      } else {
        // firstDiv.style.display = 'none'
        changeDiv.style.position = "fixed";
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
        function getMore() {
          const data = [];

          if (that.time == "3天内") {
            getHomeDataH().then((res) => {
              for (let i = 0; i < 15; i++) {
                data.push(res[i]);
              }
              that.passages = that.passages.concat(data);
            });
          } else if (that.time == "7天内") {
            request({
              url: "/data/home",
              data: `category=后端&tag=hot&time=7`,
            }).then((res) => {
              for (let i = 0; i < 15; i++) {
                data.push(res[i]);
              }
              that.passages = that.passages.concat(data);
            });
          } else if (that.time == "30天内") {
            request({
              url: "/data/home",
              data: `category=后端&tag=hot&time=30`,
            }).then((res) => {
              for (let i = 0; i < 15; i++) {
                data.push(res[i]);
              }
              that.passages = that.passages.concat(data);
            });
          } else {
            request({
              url: "/data/home",
              data: `category=后端&tag=hot&time=all`,
            }).then((res) => {
              for (let i = 0; i < 15; i++) {
                data.push(res[i]);
              }
              that.passages = that.passages.concat(data);
            });
          }
        }

        //节流
        function throttled(fn, delay) {
          let timer = null;
          let starttime = Date.now();
          return function () {
            let curTime = Date.now(); // 当前时间
            let remaining = delay - (curTime - starttime); // 从上一次到现在，还剩下多少多余时间
            let context = this;
            let args = arguments;
            clearTimeout(timer);
            if (remaining <= 0) {
              fn.apply(context, args);
              starttime = Date.now();
            } else {
              timer = setTimeout(fn, remaining);
            }
          };
        }

        throttled(getMore, 2000)();
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
  padding-top: 20px;
}

@media screen and (max-width: 1050px) {
  .board {
    padding-top: 10px;
  }

  .content {
    background-color: rgb(244, 245, 245);
    width: 100%;
  }

  .right {
    display: none;
  }

  .left {
    margin-top: 10px;
    padding-top: 10px;
    width: 100%;
    background-color: #fff;
    position: relative;
  }
}

@media screen and (min-width: 1050px) {
  .content {
    background-color: rgb(244, 245, 245);
    margin-left: calc(50% - 500px);
    width: 1000px;
    position: relative;
  }

  .left {
    padding-top: 10px;
    width: 700px;
    background-color: #fff;
    position: relative;
  }

  .right {
    position: absolute;
    width: 240px;
    top: 0%;
    right: 0px;
    background-color: #fff;
  }

  Top {
    width: 100%;
  }
}
</style>