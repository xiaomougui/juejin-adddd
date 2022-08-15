<template>
  <el-menu
    default-active="1"
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
    <el-menu-item index="1">
      <el-link href="#" style="color: #409eff" class="shouye">首页</el-link>
    </el-menu-item>
    <el-menu-item index="2">
      <el-link href="#">沸点</el-link>
    </el-menu-item>
    <el-menu-item index="3">
      <el-link href="#">课程</el-link>
    </el-menu-item>
    <el-menu-item index="4">
      <el-link href="#">直播</el-link>
    </el-menu-item>
    <el-menu-item index="5">
      <el-link href="#">活动</el-link>
    </el-menu-item>
    <el-menu-item index="6">
      <el-link href="#">商城</el-link>
    </el-menu-item>
    <el-menu-item index="7">
      <el-link href="#">APP</el-link>
    </el-menu-item>
    <el-menu-item index="8">
      <el-link href="#">插件</el-link>
    </el-menu-item>

    <el-menu-item index="9" style="margin-left: 70px">
      <el-input
        placeholder="探索稀土掘金"
        v-model="input3"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-menu-item>

    <el-menu-item index="10">
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

    <el-menu-item index="11">
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
      />
      <el-button type="text" style="color: gray">会员</el-button>
    </el-menu-item>

    <el-menu-item>
      <i class="el-icon-message-solid"></i>
    </el-menu-item>

    <el-menu-item>
      <el-avatar src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image"></el-avatar>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Header",
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

<style scoped>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-menu--horizontal > .el-menu-item.is-active {
  font-size: 13.92px;
  color: #409eff;
  border-bottom: 2px solid transparent;
}
.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  color: #71777c;
  font-size: 13.92px;
}
.el-menu--horizontal > .el-menu-item .shouye :hover {
  color: #71777c;
}
</style>