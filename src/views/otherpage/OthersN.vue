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
        <Top :index="2+''" :upper="this.upper"></Top>
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
        }
    },

  methods: {
    getdata(){
      let str = this.$route.path
      let categorys = str.split('/')
      let cat = categorys[1]
      let ta = categorys[2]
      request({
        url: '/data/home',
        data:`category=${cat}&tag=${ta}`
      }).then((res)=>{
        console.log(`category=${cat}&tag=${ta}`)
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
      let i = this.buttons.length -1;
      var buttons = document.querySelector(".tags");
      var zhankai = document.querySelector("div.tags > button:nth-child(11)");
      zhankai.style.display = "none";

      for (let j = 0; j < this.otherButtons.length; j++) {
        this.buttons[i] = this.otherButtons[j];
        i++;

        // var butt = document.createElement('button')
        // butt.className = "abc"
        // // buttons.appendChild(butt)
        buttons.innerHTML +=
          '<button id="abc" style="  background-color: #fff; color: #71777c;padding: 3px 6px;border-radius: 17px;border: 2px solid #e7e7e7;cursor: pointer;margin-right: 13px;font-size: 10px;">' +
          this.otherButtons[j] +
          "</button>";
        // butt.className=`button`
        // buttons.innerHTML += '<button id="abc">'+ this.otherButtons[j] + '</button>'
      }
    },
  },

    // 监听,当路由发生变化的时候执行
  watch:{
    $route: {
		  handler(newVal,oldVal){
			//判断newVal有没有值监听路由变化
        this.getdata()
	    },
	  deep: true
  },
},

  created() {
    this.getdata();
    
    console.log(this.$route.path)
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
  width: 48%;
  margin-left: 17%;
  /* background-color: #fff; */
  margin-bottom: 5px;
  background-color: rgb(244, 245, 245, 0.4);
}

.yincang {
  visibility: hidden;
  margin-top: 5px;
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
  margin-bottom:3px;
}

.button:hover {
  color: #007fff;
}

@media screen and (max-width:1050px) {
  .content{
    background-color: rgb(244, 245, 245);
   width: 100%;
    
  }

  .right{
    display: none;
  }

  .left{
    margin-top: 10px;
    width: 100%;
    background-color: #fff;
    position: relative;
  }


}

@media screen and (min-width:1050px) {
  .content{
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
    right:0px;
    background-color: #fff;
  }



  Top {
    width: 100%;
  }

}
</style>