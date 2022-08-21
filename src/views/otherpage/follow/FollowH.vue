<template>
  <div class="home">
    <div class="board">
      <div class="content">
        <div class="left">
          <TopHot :index="3 + ''" upper="following" @goto="goto"></TopHot>
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
import Passages from "../../home/childrenComps/Passages.vue";
import TopHot from "../../home/childrenComps/TopHot.vue";
import Signin from "../../../components/Signin.vue";

import { request } from "../../../network/request";

export default {
  data() {
    return {
      passages: [],
      time: 3,
    };
  },

  components: {
    Passages,
    TopHot,
    Signin,
  },

  methods: {
    getdata(time) {
      let tim = time;
      request({
        url: "/data/home",
        data: `category=前端&tag=hot&time=${tim}`,
      }).then((res) => {
        this.passages = res;
      });
    },

    goto(command) {
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
            data: `category=前端&tag=hot&time=${tim}`,
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

.right {
  width: 240px;
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

    top: 0%;
    right: 0px;
    background-color: #fff;
  }

  Top {
    width: 100%;
  }
}
</style>