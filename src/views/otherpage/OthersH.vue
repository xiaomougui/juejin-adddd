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
        <TopHot :index="3+''" :upper="this.upper" @goto="goto" ></TopHot>
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

import {request} from "../../network/request"



export default {
  data() {
    return {
      passages: [],
      time:3,
      tips:[["全部","前端","JavaScript","Vue.js","React.js","CSS","面试","TypeScript","Node.js", "后端","展开",],
      ["全部","Java","GO","算法","Python","Spring Boot","数据库","面试","MySQL","LeetCode","展开",],
      ["全部","人工智能","深度学习","算法","机器学习","Python","计算机视觉","后端","PyTorch","NLP","展开",],
      ["全部","Android","前端","Flutter","Kotlin","Android Jetpack","Java","APP","面试","性能优化","展开",],
      ["全部","程序员","后端","前端","算法","Python","JavaScript","Java","年终总结","面试","展开",],
      ["全部","IOS","Swift","SwiftUI","Flutter","前端","Objective-C","LeetCode","算法","WWDC","展开",],
      ["全部","后端","前端","开源","GitHub","Git","Unity3D","大数据","Linux","WWDC","展开",],
      ["全部","云人生","程序员","笔记","前端","后端","Serverless","开源","容器","Java","展开",],
      ]
    };
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
        return this.tips[0]
      else if(cat == "backend")
        return this.tips[1]
      else if(cat == "ai")
        return this.tips[2]
      else if(cat == "android")
        return this.tips[3]
      else if(cat == "code") 
        return this.tips[4]
      else if(cat == "ios")
        return this.tips[5]
      else if(cat == "tools")
        return this.tips[6]
      else if(cat == "reading")
        return this.tips[7]
      else 
        return this.tips[0]
    },
    
    
  },

  components: {
    Passages,
    TopHot,
    Signin,
  },

  methods: {
    getdata(time){
      let str = this.$route.path
      let categorys = str.split('/')
      let cat = categorys[1]
      let ta = categorys[2]
      let tim = time
      request({
        url: '/data/home',
        data:`category=${cat}&tag=${ta}&time=${tim}`
      }).then((res)=>{
        this.passages = res
      });
    },

    getMore() {
      this.tips = [["全部","前端","JavaScript","Vue.js","React.js","CSS","面试","TypeScript","Node.js", "后端","算法", "架构", "前端框架", "Webpack", "微信小程序"],
      ["全部","Java","GO","算法","Python","Spring Boot","数据库","面试","MySQL","LeetCode","架构","Redis","Spring","前端","大数据"],
      ["全部","人工智能","深度学习","算法","机器学习","Python","计算机视觉","后端","PyTorch","NLP","神经网络","数据分析","TensorFlow","程序员","强化学习","自动驾驶"],
      ["全部","Android","前端","Flutter","Kotlin","Android Jetpack","Java","APP","面试","性能优化","架构", "源码", "Android Studio", "游戏","ios","音视频开发"],
      ["全部","程序员","后端","前端","算法","Python","JavaScript","Java","年终总结","面试","开源", "架构", "大数据", "数据结构", "数据库","GitHub"],
      ["全部","IOS","Swift","SwiftUI","Flutter","前端","Objective-C","LeetCode","算法","WWDC","Xcode","MAC","面试","Apple","设计模式","计算机视觉"],
      ["全部","后端","前端","开源","GitHub","Git","Unity3D","大数据","Linux","WWDC","设计","JavaScript","Python","测试","架构"],
      ["全部","云人生","程序员","笔记","前端","后端","Serverless","开源","容器","Java","微服务","Kubernetes","产品","深度学习","架构","测试"],]  
    },

    sendCategory(p){
      //console.log(p)
      this.$router.push('/'+p+'/hot')
    },

    



    goto(command){
      //console.log(command)
      if(command != this.time){
        this.time = command
        console.log(this.time)
        if(command == '3天内'){
          this.getdata(3)
        }else if(command == '7天内'){
          this.getdata(7)
        }else if(command == '30天内'){
          this.getdata(30)
        }else{
          this.getdata("all")
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

  watch:{
    
    $route: {
		  handler(newVal,oldVal){
			//判断newVal有没有值监听路由变化
        //this.getMore()
        this.getdata(3)
	    },
	  deep: true
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
      if (clientHeight + scrollTop +1 >= scrollHeight) {
        
          let str = that.$route.path
          let categorys = str.split('/')
          let cat = categorys[1]
          let ta = categorys[2]
          let tim = ''
          if(that.time == '3天内'){
            tim = '3'
          }else if(that.time == '7天内'){
            tim = '7'
          }else if(that.time == '30天内'){
            tim = '30'
          }else{
            tim = 'all'
          }
          
        

        const data = []
        function getMore(){
          request({
            url: '/data/home',
            data:`category=${cat}&tag=${ta}&time=${tim}`
          }).then((res)=>{
              for(let i = 0;i<15;i++){
                data.push(res[i])
              }
              that.passages = that.passages.concat(data)
            });
          }
          
        

        //节流
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