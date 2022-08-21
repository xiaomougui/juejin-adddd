<template>
  <div class="home">
    <div class="board">
      <div class="tags">
        <button
          class="button"
          v-for="(p, index) of buttons"
          :key="index"
          @click="p == `展开` ? getMore() : sendCategory(p)"
        >
          {{ p }}
          <i class="el-icon-caret-bottom" v-if="p == `展开`"></i>
        </button>
      </div>
      <div class="content">
        <div class="left">
        <Top :index="1+''" :upper=this.upper></Top>
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
import Top from "../home/childrenComps/Top.vue";
import Signin from "../../components/Signin.vue";

import {request} from "../../network/request"

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
    Signin
},

  computed:{
    upper(){
      let str = this.$route.path
      let categorys = str.split('/')
      let cat = categorys[1]
      return cat
    },

    buttons() {
      let str = this.$route.path
      let categorys = str.split('/')
      let cat = categorys[1]
      if(cat == "frontend")
        return ["全部","前端","JavaScript","Vue.js","React.js","CSS","面试","TypeScript","Node.js", "后端","展开",]
      else if(cat == "backend")
        return ["全部","Java","GO","算法","Python","Spring Boot","数据库","面试","MySQL","LeetCode","展开",]
      else if(cat == "ai")
        return ["全部","人工智能","深度学习","算法","机器学习","Python","计算机视觉","后端","PyTorch","NLP","展开",]
      else if(cat == "android")
        return ["全部","Android","前端","Flutter","Kotlin","Android Jetpack","Java","APP","面试","性能优化","展开",]
      else if(cat == "code") 
        return ["全部","程序员","后端","前端","算法","Python","JavaScript","Java","年终总结","面试","展开",]
      else if(cat == "ios")
        return ["全部","IOS","Swift","SwiftUI","Flutter","前端","Objective-C","LeetCode","算法","WWDC","展开",]
      else if(cat == "tools")
        return ["全部","后端","前端","开源","GitHub","Git","Unity3D","大数据","Linux","WWDC","展开",]
      else if(cat == "reading")
        return ["全部","云人生","程序员","笔记","前端","后端","Serverless","开源","容器","Java","展开",]
      else 
        return ["全部","前端","JavaScript","Vue.js","React.js","CSS","面试","TypeScript","Node.js", "后端","展开",]
    },

    otherButtons(){
      let str = this.$route.path
      let categorys = str.split('/')
      let cat = categorys[1]
      if(cat == "frontend")
        return ["算法", "架构", "前端框架", "Webpack", "微信小程序"]
      else if(cat == "backend")
        return ["架构","Redis","Spring","前端","大数据"]
      else if(cat == "ai")
        return ["神经网络","数据分析","TensorFlow","程序员","强化学习","自动驾驶"]
      else if(cat == "android")
        return [ "架构", "源码", "Android Studio", "游戏","ios","音视频开发"]
      else if(cat == "code") 
        return ["开源", "架构", "大数据", "数据结构", "数据库","GitHub"]
      else if(cat == "ios")
        return ["Xcode","MAC","面试","Apple","设计模式","计算机视觉"]
      else if(cat == "tools")
        return ["设计","JavaScript","Python","测试","架构"]
      else if(cat == "reading")
        return ["微服务","Kubernetes","产品","深度学习","架构","测试"]
      else
        return  ["算法", "架构", "前端框架", "Webpack", "微信小程序"]
    }
  },

  methods: {
    getdata(){
      let str = this.$route.path
      let categorys = str.split('/')
      let cat = categorys[1]
      console.log(cat)
      let ta = categorys[2]
      request({
        url: '/data/home',
        data:`category=${cat}&tag=${ta}`
      }).then((res)=>{
        console.log(cat)
        this.passages = res
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

    getMore() {
      // let i = this.buttons.length -1;
      // var buttons = document.querySelector(".tags");
      // var zhankai = document.querySelector("div.tags > button:nth-child(11)");
      // zhankai.style.display = "none";

      // for (let j = 0; j < this.otherButtons.length; j++) {
      //   this.buttons[i] = this.otherButtons[j];
      //   i++;
      //   buttons.innerHTML +=
      //     '<button id="abc" style="  background-color: #fff; color: #71777c;padding: 3px 6px;border-radius: 17px;border: 2px solid #e7e7e7;cursor: pointer;margin-right: 13px;font-size: 10px;">' +
      //     this.otherButtons[j] +
      //     "</button>";
      // }

      this.buttons = this.otherButtons
      buttons.innerHTML =
          '<button id="abc" style="  background-color: #fff; color: #71777c;padding: 3px 6px;border-radius: 17px;border: 2px solid #e7e7e7;cursor: pointer;margin-right: 13px;font-size: 10px;">' +
          this.otherButtons +
          "</button>";
    },

    sendCategory(p){
      console.log(p)
      this.$router.push('/'+p+'/recommend')
    }
  },

    // 监听,当路由发生变化的时候执行
  watch:{
    
    $route: {
		  handler(newVal,oldVal){
			//判断newVal有没有值监听路由变化
        //this.getMore()
        this.getdata()
	    },
	  deep: true
  },
},

  created() {
    
    this.getdata();
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", function () {
      // 滚动视口高度(也就是当前元素的真实高度)
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      // 可见区域高度
      let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      // 滚动条顶部到浏览器顶部高度
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (clientHeight + scrollTop +1 >= scrollHeight) {
        //获取更多数据函数
        let str = that.$route.path
        let categorys = str.split('/')
        let cat = categorys[1]
        let ta = categorys[2]
        const data = []
        function getMore(){
          request({
            url: '/data/home',
            data:`category=${cat}&tag=${ta}`
          }).then((res)=>{
            for(let i = 0;i<15;i++){
              data.push(res[i])
            }
            that.passages = that.passages.concat(data)
          });
        }
        //节流函数
        function throttled(fn, delay) {
          let timer = null
          let starttime = Date.now()
          return function () {
            let curTime = Date.now() // 当前时间
            let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
            let context = this
            let args = arguments
            clearTimeout(timer)
            if (remaining <= 0) {
              fn.apply(context, args)
              starttime = Date.now()
            } else {
              timer = setTimeout(fn, remaining);
            }
          }
        }
        //调用节流后的获取更多函数
        throttled(getMore,2000)()
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
    display: flex;
  }
  .left {
    margin-right: 13px;
    padding-top: 10px;
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