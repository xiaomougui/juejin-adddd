<template>
  <el-menu
    default-active="1"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    @click="backTop()"
  >
    <el-menu-item>
      <el-image
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
        fit="contain"
      ></el-image>
    </el-menu-item>
    <el-menu-item index="1">
      <el-link href="#" class="shouye">首页</el-link>
    </el-menu-item>
    <el-menu-item index="2" class="feidian">
      <el-link href="#">沸点</el-link>
    </el-menu-item>
    <el-menu-item index="3" class="kecheng">
      <el-link href="#">课程</el-link>
    </el-menu-item>
    <el-menu-item index="4" class="zhibo">
      <el-link href="#">直播</el-link>
    </el-menu-item>
    <el-menu-item index="5" class="activity">
      <el-link href="#">活动</el-link>
    </el-menu-item>
    <el-menu-item index="6" class="shop">
      <el-link href="#">商城</el-link>
    </el-menu-item>
    <el-menu-item index="7" class="APP">
      <el-link href="#">APP</el-link>
    </el-menu-item>
    <el-menu-item index="8" class="chajian">
      <el-link href="#">插件</el-link>
    </el-menu-item>

    <el-menu-item index="9" style="margin-left: 70px" class="search">
      <el-input
        placeholder="探索稀土掘金"
        class="input-with-select"
        @focus="changeInput"
        @blur="changeDiv"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-menu-item>

    <el-menu-item index="10" class="center">
      <el-dropdown split-button type="primary" trigger="click">
        创作者中心
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="el-icon-edit"></i>
            写文章
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="el-icon-refresh-right"></i>
            发沸点
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="el-icon-download"></i>
            写代码
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>

    <el-menu-item index="11" class="VIP">
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
      />
      <el-button type="text" style="color: gray">会员</el-button>
    </el-menu-item>

    <el-menu-item>
      <i class="el-icon-message-solid"></i>
    </el-menu-item>

    <el-menu-item>
      <el-avatar
        src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image"
      ></el-avatar>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  created() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    changeInput() {
      document.querySelector("li.center").style.visibility = "hidden";
    },
    changeDiv() {
      document.querySelector("li.center").style.visibility = "visible";
    },
    // changeHidde(){
    //   var scrollTop = document.documentElement.scrollTop

    //   if (scrollTop > 300){
    //     document.querySelector('div.header > ul').style.display = 'none'
    //   }
    // }
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      console.log(scrollTop);
      //为了计算距离顶部的高度，当高度大于500隐藏
      if (that.scrollTop > 500) {
        document.querySelector("div.header > ul").style.visibility = "hidden";
      } else {
        document.querySelector("div.header > ul").style.visibility = "visible";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
  },
};
</script>

<style scoped>
.el-dropdown {
  vertical-align: top;
}

ul > li:nth-child(1) > div {
  width: 6.6875rem;
  height: 1.375rem;
}

ul > li.el-menu-item.is-active {
  font-size: 1.167rem;
  color: #409eff;
  border-bottom-color: transparent;
}

ul > li:nth-child(2) > div {
  float: left;
  width: 3.25rem;
  height: 3.75rem;
  line-height: 60px;
  margin: 0;
  color: #409eff;
  font-size: 1.167rem;
}

#app ul > li:nth-child(n + 3):nth-child(-n + 9) {
  float: left;
  width: 3.25rem;
  height: 3.75rem;
  line-height: 60px;
  margin: 0;
  color: #71777c;
  font-size: 1.167rem;
}

ul > li :hover {
  color: #252933;
}

ul > li.el-menu-item.search {
  width: 30rem;
  padding-left: 6rem;
}

ul > li.el-menu-item.search :focus {
  -webkit-animation-name: myfirst;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-fill-mode: forwards;
}

@-webkit-keyframes myfirst {
  0% {
    width: 23rem;
  }
  100% {
    width: 30rem;
  }
}

ul > li:nth-child(12) {
  width: 5rem;
}

ul > li:nth-child(13) {
  width: 3.5rem;
}

ul > li:nth-child(14) {
  width: 3.5rem;
}

@media screen and (max-width: 1535px) {
  .APP {
    display: none;
  }
  .chajian {
    display: none;
  }
}

@media screen and (max-width: 1432px) {
  .feidian {
    display: none;
  }
  .kecheng {
    display: none;
  }
  .zhibo {
    display: none;
  }
  .activity {
    display: none;
  }
  .shop {
    display: none;
  }
}

@media screen and (max-width: 1170px) {
  .VIP {
    display: none;
  }
}

@media screen and (max-width: 1092px) {
  .center {
    display: none;
  }
}

@media screen and (max-width: 915px) {
  ul > li.el-menu-item.search {
    width: 20rem;
  }
}

@media screen and (max-width: 752px) {
  .search {
    display: none;
  }
}

div.header > ul {
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
}
</style>