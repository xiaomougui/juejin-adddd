<template>
  <div class="home">
    <div class="board">
      <div class="content">
        <div class="left">
          <Top :index="1 + ''" upper="home"></Top>
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
import Top from "./childrenComps/Top.vue";

import { getHomeData } from "../../network/home";

export default {
  data() {
    return {
      passages: [],
    };
  },

  components: {
    Passages,
    Top,
    Signin,
    Signin,
  },

  methods: {
    getHomeData() {
      getHomeData().then((res) => {
        this.passages = res;
      });
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
      if (clientHeight + scrollTop + 1 >= scrollHeight) {
        //获取更多数据函数
        function getMore() {
          console.log(that.passages);
          const data = [];
          getHomeData().then((res) => {
            for (let i = 0; i < 15; i++) {
              data.push(res[i]);
            }
            that.passages = that.passages.concat(data);
          });
        }
        //节流函数
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
        //调用节流后的获取更多函数
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
  height: 100%;
  width: 100%;
  background-color: rgb(244, 245, 245);
  padding-top: 20px;
  position: relative;
}

@media screen and (max-width: 1050px) {
  .content {
    background-color: rgb(244, 245, 245);
    width: 100%;
  }

  .right {
    display: none;
  }

  .left {
    margin-top: 10px;
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
    width: 250px;
    top: 0%;
    right: 0px;
    background-color: #fff;
  }

  Top {
    width: 100%;
  }
}
</style>