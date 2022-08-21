<template>
  <div class="nav">
    <div class="zuo">
      <ul class="leimu">
        <li><a href="javascript:;" @click="goHome">综合</a></li>
        <li><a href="javascript:;" @click="follow">关注</a></li>
        <li>
          <a href="javascript:;" @click="goBack">
            <el-popover
              placement="top-start"
              width="300"
              trigger="hover"
              visible-arrow="false"
            >
              <el-row>
                <el-button type="primary" round size="mini">后端</el-button>
                <el-button round size="mini">Java </el-button>
                <el-button round size="mini">Go </el-button>
                <el-button round size="mini">算法 </el-button>
                <el-button round size="mini">Python </el-button>
                <el-button round size="mini">Spring Boot</el-button>
                <el-button round size="mini">数据库 </el-button>
                <el-button round size="mini">面试 </el-button>
                <el-button round size="mini">MySQL </el-button>
                <el-button round size="mini">LeetCode </el-button>
                <el-button round size="mini">架构 </el-button>
                <el-button round size="mini">Redis </el-button>
                <el-button round size="mini">Spring </el-button>
                <el-button round size="mini">前端 </el-button>
                <el-button round size="mini">大数据 </el-button>
              </el-row>
              <el-link :underline="false" slot="reference">后端</el-link>
            </el-popover></a
          >
        </li>
        <li>
          <a href="javascript:;" @click="goFront">
            <el-popover placement="top-start" width="300" trigger="hover">
              <el-row>
                <el-button round size="mini">前端</el-button>
                <el-button round size="mini">JavaScript</el-button>
                <el-button round size="mini">Vue.js</el-button>
                <el-button round size="mini">React.js</el-button>
                <el-button round size="mini">CSS</el-button>
                <el-button round size="mini">面试</el-button>
                <el-button round size="mini">TypeScript</el-button>
                <el-button round size="mini">后端</el-button>
                <el-button round size="mini">Node.js</el-button>
                <el-button round size="mini">算法</el-button>
                <el-button round size="mini">前端框架</el-button>
                <el-button round size="mini">Webpack</el-button>
                <el-button round size="mini">架构</el-button>
                <el-button round size="mini">微信小程序</el-button>
                <el-button round size="mini">Android</el-button>
              </el-row>
              <el-link :underline="false" slot="reference">前端</el-link>
            </el-popover></a
          >
        </li>
        <li>
          <a href="javascript:;" @click="goAndroid">
            <el-popover placement="top-start" width="300" trigger="hover">
              <el-row>
                <el-button round size="mini">Android</el-button>
                <el-button round size="mini">前端</el-button>
                <el-button round size="mini">Flutter</el-button>
                <el-button round size="mini">Kotlin</el-button>
                <el-button round size="mini">Android Jetpack</el-button>
                <el-button round size="mini">Java</el-button>
                <el-button round size="mini">APP</el-button>
                <el-button round size="mini">面试</el-button>
                <el-button round size="mini">性能优化</el-button>
                <el-button round size="mini">架构</el-button>
                <el-button round size="mini">源码</el-button>
                <el-button round size="mini">Android Studio</el-button>
                <el-button round size="mini">游戏</el-button>
                <el-button round size="mini">iOS</el-button>
                <el-button round size="mini">音视频开发</el-button>
              </el-row>
              <el-link :underline="false" slot="reference">Android</el-link>
            </el-popover></a
          >
        </li>
        <li>
          <a href="javascript:;" @click="goios">
            <el-popover placement="top-start" width="300" trigger="hover">
              <el-row>
                <el-button round size="mini">iOS</el-button>
                <el-button round size="mini">Swift</el-button>
                <el-button round size="mini">SwiftUI</el-button>
                <el-button round size="mini">Flutter</el-button>
                <el-button round size="mini">前端</el-button>
                <el-button round size="mini">Objective-C</el-button>
                <el-button round size="mini">LeetCode</el-button>
                <el-button round size="mini">算法</el-button>
                <el-button round size="mini">WWDC</el-button>
                <el-button round size="mini">Xcode</el-button>
                <el-button round size="mini">MAC</el-button>
                <el-button round size="mini">面试</el-button>
                <el-button round size="mini">Apple</el-button>
                <el-button round size="mini">设计模式</el-button>
                <el-button round size="mini">计算机视觉</el-button>
              </el-row>
              <el-link :underline="false" slot="reference">iOS</el-link>
            </el-popover></a
          >
        </li>
        <li>
          <a href="javascript:;" @click="goAI">
            <el-popover placement="top-start" width="300" trigger="hover">
              <el-row>
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
              </el-row>
              <el-link :underline="false" slot="reference">人工智能</el-link>
            </el-popover></a
          >
        </li>
        <li>
          <a href="javascript:;" @click="goTools">
            <el-popover placement="top-start" width="300" trigger="hover">
              <el-row>
                <el-button round size="mini">后端</el-button>
                <el-button round size="mini">前端</el-button>
                <el-button round size="mini">开源</el-button>
                <el-button round size="mini">GitHub</el-button>
                <el-button round size="mini">Git</el-button>
                <el-button round size="mini">Unity3D</el-button>
                <el-button round size="mini">大数据</el-button>
                <el-button round size="mini">Linux</el-button>
                <el-button round size="mini">程序员</el-button>
                <el-button round size="mini">设计</el-button>
                <el-button round size="mini">JavaScript</el-button>
                <el-button round size="mini">Python</el-button>
                <el-button round size="mini">数据库</el-button>
                <el-button round size="mini">测试</el-button>
                <el-button round size="mini">架构</el-button>
              </el-row>
              <el-link :underline="false" slot="reference">开发工具</el-link>
            </el-popover></a
          >
        </li>
        <li>
          <a href="javascript:;" @click="goCode">
            <el-popover placement="top-start" width="300" trigger="hover">
              <el-row>
                <el-button round size="mini">程序员</el-button>
                <el-button round size="mini">前端</el-button>
                <el-button round size="mini">后端</el-button>
                <el-button round size="mini">算法</el-button>
                <el-button round size="mini">Python</el-button>
                <el-button round size="mini">JavaScript</el-button>
                <el-button round size="mini">Java</el-button>
                <el-button round size="mini">年终总结</el-button>
                <el-button round size="mini">面试</el-button>
                <el-button round size="mini">开源</el-button>
                <el-button round size="mini">架构</el-button>
                <el-button round size="mini">大数据</el-button>
                <el-button round size="mini">数据结构</el-button>
                <el-button round size="mini">数据库</el-button>
                <el-button round size="mini">GitHub</el-button>
              </el-row>
              <el-link :underline="false" slot="reference">代码人生</el-link>
            </el-popover></a
          >
        </li>
        <li>
          <a href="javascript:;" @click="goReading">
            <el-popover placement="top-start" width="300" trigger="hover">
              <el-row>
                <el-button round size="mini">云人生</el-button>
                <el-button round size="mini">程序员</el-button>
                <el-button round size="mini">笔记</el-button>
                <el-button round size="mini">前端</el-button>
                <el-button round size="mini">后端</el-button>
                <el-button round size="mini">Serverless</el-button>
                <el-button round size="mini">开源</el-button>
                <el-button round size="mini">容器</el-button>
                <el-button round size="mini">Java</el-button>
                <el-button round size="mini">微服务</el-button>
                <el-button round size="mini">Kubernetes</el-button>
                <el-button round size="mini">产品</el-button>
                <el-button round size="mini">深度学习</el-button>
                <el-button round size="mini">架构</el-button>
                <el-button round size="mini">测试</el-button>
              </el-row>
              <el-link :underline="false" slot="reference">阅读</el-link>
            </el-popover></a
          >
        </li>

        <li style="margin-left: 305px"><a href="#">标签管理</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    follow() {
      this.$router.push("/following");
    },
    goBack() {
      this.$emit("back");
      this.$router.push("/backend");
    },
    goFront() {
      this.$router.push("/frontend");
    },
    goAI() {
      this.$router.push("/ai");
    },
    goAndroid() {
      this.$router.push("/android");
    },
    goios() {
      this.$router.push("/ios");
    },
    goCode() {
      this.$router.push("/code");
    },
    goTools() {
      this.$router.push("/tools");
    },
    goReading() {
      this.$router.push("/reading");
    },
  },
};
</script>

<style scoped>
.nav {
  height: 40px;
  width: 100%;
  background-color: #fff;
}
a {
  text-decoration: none;
}
.zuo {
  width: 1000px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
/* .zuo {
  padding-bottom: 50px;
} */
.leimu {
  float: left;
  height: 20px;
  /* margin-left: 200px; */
}
.nav ul li {
  float: left;
  display: list-item;
  padding: 0px 20px 20px 0px;
  text-align: center;
  list-style: none;
}
.nav ul li a {
  display: block;
  height: 30px;
  font-size: 13.92px;
  color: #71777c;
  text-decoration: none;
}
.nav ul li a:hover {
  color: #007fff;
}
</style>





         
      