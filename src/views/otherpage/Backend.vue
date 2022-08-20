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
      <div class="left">
        <Top></Top>
        <Passages :passages="passages"></Passages>
      </div>
    </div>
  </div>
</template>

<script>
import Passages from "../home/childrenComps/Passages.vue";
import Nav from "../home/childrenComps/Nav.vue";
import Top from "../home/childrenComps/Top.vue";

import { getFrontData } from "../../network/home";
import { Button } from "element-ui";

export default {
  data() {
    return {
      buttons: [
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
      obj: [1, 2, 3],
    };
  },

  components: {
    Passages,
    Nav,
    Top,
  },

  methods: {
    
    show() {
      var butt = document.querySelector(".yincang");
      butt.style.visibility = "visible";
      var yincang = document.querySelector(".showus");
      yincang.style.display = "none";
    },
    getData() {
      getFrontData().then((res) => {
        this.passages = res;
      });
    },
    getMore() {
      let i = this.buttons.length - 1;
      var buttons = document.querySelector(".tags");
      var zhankai = document.querySelector("div.tags > button:nth-child(10)");
      zhankai.style.display = "none";

      for (let j = 0; j < this.otherButtons.length; j++) {
        this.buttons[i] = this.otherButtons[j];
        i++;

        
        buttons.innerHTML +=
          '<button id="abc" style="background-color: #fff;color: #71777c;padding: 4px 6px;border-radius: 15px;border: 2px solid #e7e7e7;cursor: pointer;padding-right: 10px;margin-right: 10px;">' +
          this.otherButtons[j] +
          "</button>";
      }
    },
  },

  created() {
    this.getData();
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
        const data = [];
        getData().then((res) => {
          //console.log(res)
          for (let i = 0; i < 15; i++) {
            data.push(res[i]);
          }
          this.setTimeout(function () {
            that.passages = that.passages.concat(data);
          }, 1000);
        });
      }
    });
    
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
  width: 45%;
  margin-left: 18%;
  /* background-color: #fff; */
  margin-bottom: 10px;
  background-color: rgb(244, 245, 245, 0.4);
}

.left {
  width: 45%;
  margin-left: 18%;
  background-color: #fff;
}

.top {
  width: 100%;
}

.yincang {
  visibility: hidden;
  margin-top: 5px;
}

.button {
  background-color: #fff;
  color: #71777c;
  padding: 4px 6px;
  border-radius: 15px;
  border: 2px solid #e7e7e7;
  cursor: pointer;
  margin-right: 10px;
}
.button:hover {
  color: #007fff;
}

</style>