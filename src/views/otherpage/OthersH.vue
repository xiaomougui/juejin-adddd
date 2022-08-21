<template>
  <div class="home">
    <div class="board">
      <div class="tags">
        <button
          class="button"
          v-for="(p, index) of buttons"
          :key="index"
          @click="p == `展开` ? getMore() : sendCategory()"
        >
          {{ p }}
          <i class="el-icon-caret-bottom" v-if="p == `展开`"></i>
        </button>
      </div>
      <div class="content">
        <div class="left">
          <TopHot :index="3 + ''" :upper="this.upper" @goto="goto"></TopHot>
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
import Passages from "../home/childrenComps/Passages.vue";
import TopHot from "../home/childrenComps/TopHot.vue";
import Signin from "../../components/Signin.vue";

import { request } from "../../network/request";

export default {
  data() {
    return {
      buttons: [
        "全部",
        "前端",
        "JavaScript",
        "Vue.js",
        "React.js",
        "CSS",
        "面试",
        "TypeScript",
        "Node.js",
        "后端",
        "展开",
      ],
      otherButtons: ["算法", "架构", "前端框架", "Webpack", "微信小程序"],
      passages: [],
      time: 3,
    };
  },

  computed: {
    upper() {
      let str = this.$route.path;
      let categorys = str.split("/");
      let cat = categorys[1];
      return cat;
    },
  },

  components: {
    Passages,
    TopHot,
    Signin,
  },

  methods: {
    getdata(time) {
      let str = this.$route.path;
      let categorys = str.split("/");
      let cat = categorys[1];
      let ta = categorys[2];
      let tim = time;
      request({
        url: "/data/home",
        data: `category=${cat}&tag=${ta}&time=${tim}`,
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
          this.getdata(3);
        } else if (command == "7天内") {
          this.getdata(7);
        } else if (command == "30天内") {
          this.getdata(30);
        } else {
          this.getdata("all");
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
    this.getdata(3);
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
        let str = that.$route.path;
        let categorys = str.split("/");
        let cat = categorys[1];
        let ta = categorys[2];
        let tim = "";
        if (that.time == "3天内") {
          tim = "3";
        } else if (that.time == "7天内") {
          tim = "7";
        } else if (that.time == "30天内") {
          tim = "30";
        } else {
          tim = "all";
        }

        const data = [];
        function getMore() {
          request({
            url: "/data/home",
            data: `category=${cat}&tag=${ta}&time=${tim}`,
          }).then((res) => {
            for (let i = 0; i < 15; i++) {
              data.push(res[i]);
            }
            that.passages = that.passages.concat(data);
          });
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
  padding-top: 10px;
}

.tags {
  width: 1000px;
  margin: 0 auto;
  left: 0;
  right: 0;
  /* background-color: #fff; */
  margin-bottom: 5px;
  background-color: rgb(244, 245, 245, 0.4);
}

.yincang {
  visibility: hidden;
  margin-top: 5px;
}

.content {
  display: inline-block;
  background-color: rgb(244, 245, 245);
  width: 100%;
  height: auto;
}

.button {
  background-color: #fff;
  color: #71777c;
  padding: 3px 6px;
  border-radius: 17px;
  border: 2px solid #e7e7e7;
  cursor: pointer;
  margin-right: 13px;
  font-size: 10px;
  margin-bottom: 3px;
}

.button:hover {
  color: #007fff;
}

@media screen and (max-width: 1050px) {
  .content {
    display: inline-block;
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
    display: flex;
  }

  .left {
    margin-right: 13px;
    width: 700px;
    background-color: #fff;
    position: relative;
  }

  .right {
    margin-right: 13px;
    width: 240px;
    top: 0%;
    right: 0px;
    background-color: rgb(244, 245, 245);
  }

  Top {
    width: 100%;
  }
}
</style>