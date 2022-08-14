<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item>
      <el-image
        style="width: 107px; height: 22px"
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
        fit="contain"
      ></el-image>
    </el-menu-item>
    <el-menu-item index="1" id="shouye">首页</el-menu-item>
    <el-menu-item index="2" id="wenzi">沸点</el-menu-item>
    <el-menu-item index="3" id="wenzi">课程</el-menu-item>
    <el-menu-item index="4" id="wenzi">直播</el-menu-item>
    <el-menu-item index="5" id="wenzi">活动</el-menu-item>
    <el-menu-item index="6" id="wenzi">商城</el-menu-item>
    <el-menu-item index="7" id="wenzi">APP</el-menu-item>
    <el-menu-item index="8" id="wenzi">插件</el-menu-item>
    <el-menu-item>
      <div> 
        <el-input
          placeholder="探索稀土掘金"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-menu-item>
    <el-menu-item>
      <el-dropdown split-button type="primary" @click="handleClick">
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
    <el-menu-item>
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
      />
      <el-button type="text" style="color: gray">会员</el-button>
    </el-menu-item>
    <el-menu-item>
      <i class="el-icon-message-solid"></i>
    </el-menu-item>
    <el-menu-item>
      <div>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick() {
      alert("button click");
    },
  },
};
</script>

<style>

.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

#shouye{
  color: #409EFF;
  border-bottom-color: transparent;
}
#shouye:hover{
  color: #252933;
  border-bottom: 2px solid #409EFF!important;
}
#wenzi {
  font-size: 13.92px;
  color: #71777c;
}

#wenzi:hover {
  color: #252933;
  border-bottom: 2px solid #409EFF!important;
}
</style>