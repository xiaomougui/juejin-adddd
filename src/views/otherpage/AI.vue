<template>
  <div class="home">
    <div class="board">
      <div class="tags">
        <el-button type="primary" round size="mini">全部</el-button>
        <el-button round size="mini">人工智能</el-button>
        <el-button round size="mini">深度学习</el-button>
        <el-button round size="mini">算法</el-button>
        <el-button round size="mini">机器学习</el-button>
        <el-button round size="mini">Python</el-button>
        <el-button round size="mini">计算机视觉</el-button>
        <el-button round size="mini">后端</el-button>
        <el-button round size="mini">PyTorch</el-button>
        <el-button round size="mini">NLP</el-button>
        <el-button round size="mini">神经网络</el-button>
        <el-button round size="mini">数据分析</el-button>
        <el-button round size="mini">TensorFlow</el-button>
        <el-button round size="mini">程序员</el-button>
        <el-button round size="mini">强化学习</el-button>
        <el-button round size="mini">自动驾驶</el-button>
      </div>
      <div class="left">
        <Top></Top>
        <Passages :passages="passages"></Passages>
      </div>
    </div>
    <!-- <button @click="test">click me</button> -->
  </div>
</template>

<script>
import Passages from "../home/childrenComps/Passages.vue";
import Nav from "../home/childrenComps/Nav.vue";
import Top from "../home/childrenComps/Top.vue";

import { getAIData } from "../../network/home";

export default {
  data() {
    return {
      passages: [],
      obj: [1, 2, 3],
    };
  },

  components: {
    Passages,
    Nav,
    Top,
    Top,
  },

  methods: {
    getData() {
      getAIData().then((res) => {
        this.passages = res;
      });
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
        const data = [];
        getData().then((res) => {
          //console.log(res)
          for (let i = 0; i < 15; i++) {
            data.push(res[i]);
          }
          this.setTimeout(function () {
            that.passages = that.passages.concat(data);
          }, 1000);

          // console.log(data)
          // console.log(that.passages)
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
  width: 50%;
  margin-left: 18%;
  background-color: #fff;
  margin-bottom: 10px;
}

.left {
  width: 45%;
  margin-left: 18%;
  background-color: #fff;
}

.top {
  width: 100%;
}
</style>